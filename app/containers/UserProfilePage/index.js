/**
 *
 * UserProfilePage
 *
 */

import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardOverflow from '@mui/joy/CardOverflow';
import DialogContent from '@mui/joy/DialogContent';
import DialogTitle from '@mui/joy/DialogTitle';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormHelperText from '@mui/joy/FormHelperText';
import FormLabel from '@mui/joy/FormLabel';
import IconButton from '@mui/joy/IconButton';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog from '@mui/joy/ModalDialog';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import Visibility from '../../components/icons/Visibility';
import VisibilityOff from '../../components/icons/VisibilityOff';
import reducer from './reducer';
import saga from './saga';
import { StyledButton } from '../../components/Styled/StyledButton';
import * as selectors from './selectors';
import {
  validateData,
  validateDate,
  validatePassword,
} from '../../utils/custom/ValidateInputs';
import {
  changeAvatarAction,
  changeBirthdateAction,
  changeCurrentPasswordAction,
  changeFirstNameAction,
  changeLastNameAction,
  changeNewPasswordAction,
  cleanupStore,
  updatePasswordAction,
  updateUserInfoAction,
} from './actions';
import { formatName } from '../../utils/custom/stringManipulation';
import useAuth from '../../utils/custom/hooks/useAuth';
import ErrorMessage from './ErrorMessage';
import Avatars, { avatarsPaths } from './Avatars';
import MySnackbar from '../../components/MySnackbar';
import useAxiosPrivate from '../../utils/custom/hooks/useAxiosPrivate';

const mapStateToProps = createStructuredSelector({
  firstName: selectors.makeSelectFirstName(),
  lastName: selectors.makeSelectLastName(),
  birthdate: selectors.makeSelectBirthdate(),
  avatar: selectors.makeSelectAvatar(),
  newPassword: selectors.makeSelectNewPassword(),
  currentPassword: selectors.makeSelectCurrentPassword(),
  updatingUserInfo: selectors.makeSelectUpdatingUserInfo(),
  errorUpdatingUserInfo: selectors.makeSelectErrorUpdatingUserInfo(),
  successUpdatingUserInfo: selectors.makeSelectSuccessUpdatingUserInfo(),
  updatingPassword: selectors.makeSelectUpdatingPassword(),
  errorUpdatingPassword: selectors.makeSelectErrorUpdatingPassword(),
  successUpdatingPassword: selectors.makeSelectSuccessUpdatingPassword(),
});

export function UserProfilePage() {
  useInjectReducer({ key: 'userProfilePage', reducer });
  useInjectSaga({ key: 'userProfilePage', saga });
  useAxiosPrivate();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { userInfo } = useAuth();

  const {
    firstName,
    lastName,
    birthdate,
    avatar,
    newPassword,
    currentPassword,
    updatingUserInfo,
    errorUpdatingUserInfo,
    successUpdatingUserInfo,
    updatingPassword,
    errorUpdatingPassword,
    successUpdatingPassword,
  } = useSelector(mapStateToProps);

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] =
    useState(false);

  const [passwordMatch, setPasswordMatch] = useState(false);
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [invalidPassword, setInvalidPassword] = useState(false);

  const [invalidBirthdate, setInvalidBirthdate] = useState(false);
  const [isDataValid, setIsDataValid] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const newUserData = {
    firstName,
    lastName,
    birthdate,
    avatar,
  };

  const isSameData =
    userInfo?.firstName === newUserData.firstName &&
    userInfo?.lastName === newUserData.lastName &&
    userInfo?.birthdate === newUserData.birthdate &&
    userInfo?.avatar === newUserData.avatar;

  const newPasswordData = { currentPassword, newPassword };

  useEffect(() => {
    if (userInfo) {
      dispatch(changeFirstNameAction(userInfo.firstName));
      dispatch(changeLastNameAction(userInfo.lastName));
      dispatch(changeBirthdateAction(userInfo.birthdate));
      dispatch(changeAvatarAction(userInfo.avatar));
    }
  }, [userInfo]);

  useEffect(() => {
    setIsDataValid(
      validateData({
        firstName,
        lastName,
        birthdate,
        email: 'email@email.com',
        password: 'password12345',
      }),
    );
  }, [firstName, lastName, birthdate]);

  useEffect(() => {
    if (successUpdatingUserInfo !== null) navigate(0);
  }, [successUpdatingUserInfo]);

  useEffect(() => {
    if (successUpdatingPassword !== null) {
      setSnackbarOpen(true);
    }
  }, [successUpdatingPassword]);

  useEffect(
    () => () => {
      dispatch(cleanupStore());
    },
    [],
  );

  const handleFirstNameChange = (e) => {
    const formattedName = formatName(e.target.value);
    dispatch(changeFirstNameAction(formattedName));
  };
  const handleLastNameChange = (e) => {
    const formattedName = formatName(e.target.value);
    dispatch(changeLastNameAction(formattedName));
  };

  const handleBirthdateChange = (e) => {
    const restult = validateDate(e.target.value);
    if (!restult) {
      setInvalidBirthdate(true);
    } else {
      setInvalidBirthdate(false);
    }
    dispatch(changeBirthdateAction(e.target.value));
  };

  const handleNewPasswordChange = (e) => {
    const restult = validatePassword(e.target.value);
    if (!restult) {
      setInvalidPassword(true);
    } else {
      setInvalidPassword(false);
    }
    dispatch(changeNewPasswordAction(e.target.value));
  };

  const handlePasswordConfirmationChange = (e) => {
    setPasswordConfirmation(e.target.value);
    if (e.target.value === newPassword) {
      setPasswordMatch(true);
    } else {
      setPasswordMatch(false);
    }
  };

  // dispatchers
  const handleOnSaveUserInfoChanges = () => {
    dispatch(updateUserInfoAction(newUserData));
  };

  const handleOnPasswordChangeButtonClick = () => {
    dispatch(updatePasswordAction(newPasswordData));
  };

  return (
    <Box sx={{ flex: 1, width: '100%' }}>
      <Stack
        spacing={4}
        sx={{
          display: 'flex',
          width: { xs: '90%', md: 700, lg: 800 },
          maxWidth: 800,
          mx: { xs: '5%', md: 'auto' }, // margin left & right
          px: { xs: 0, md: 6 },
          py: { xs: 2, md: 3 },
        }}
      >
        <Card sx={{ filter: updatingUserInfo ? 'blur(2px)' : 'none' }}>
          <Box sx={{ mb: 1 }}>
            <Typography level="title-md">Informations personnelles</Typography>
          </Box>
          <Divider />

          {/* WIDE SCREEN */}
          <Stack
            direction="row"
            spacing={3}
            sx={{
              display: { xs: 'none', md: 'flex' },
              my: 1,
              justifyContent: 'space-between',
            }}
          >
            <Stack direction="column" spacing={1}>
              <AspectRatio
                ratio="1"
                maxHeight={200}
                sx={{ flex: 1, minWidth: 150, borderRadius: '100%' }}
              >
                <img src={avatarsPaths[avatar]} loading="lazy" alt="avatar" />
              </AspectRatio>

              <IconButton
                aria-label="upload new picture"
                size="sm"
                variant="outlined"
                color="neutral"
                sx={{
                  bgcolor: 'background.body',
                  position: 'absolute',
                  zIndex: 2,
                  borderRadius: '50%',
                  left: 135,
                  top: 175,
                  boxShadow: 'sm',
                }}
                onClick={() => setModalVisible(true)}
              >
                <EditRoundedIcon />
              </IconButton>
            </Stack>
            <Stack spacing={2}>
              <Stack direction="row" spacing={2}>
                <FormControl>
                  <FormLabel>Prénom</FormLabel>
                  <Input
                    value={firstName}
                    onChange={handleFirstNameChange}
                    size="sm"
                    placeholder="Prénom"
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Nom</FormLabel>
                  <Input
                    value={lastName}
                    onChange={handleLastNameChange}
                    size="sm"
                    placeholder="Nom"
                  />
                </FormControl>
              </Stack>

              <FormControl error={invalidBirthdate}>
                <FormLabel>Date de naissance</FormLabel>
                <Input
                  value={birthdate}
                  onChange={handleBirthdateChange}
                  size="sm"
                  type="date"
                />
                {invalidBirthdate && (
                  <FormHelperText color="danger">
                    Date de naissance invalide (Âge minimum : 12 ans)
                  </FormHelperText>
                )}
              </FormControl>

              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                  value={userInfo?.email || ''}
                  size="sm"
                  type="email"
                  startDecorator={<EmailRoundedIcon />}
                  placeholder="email"
                  disabled
                />
              </FormControl>
            </Stack>
          </Stack>

          {/* MOBILE SCREEN */}
          <Stack
            direction="column"
            spacing={2}
            sx={{
              display: { xs: 'flex', md: 'none' },
              my: 1,
            }}
          >
            <Stack direction="column" spacing={1} alignItems="center">
              <AspectRatio
                ratio="1"
                maxHeight={200}
                sx={{
                  flex: 1,
                  minWidth: 150,
                  borderRadius: '50%',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <img
                  src={avatarsPaths[avatar]}
                  loading="lazy"
                  alt="avatar"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    borderRadius: '50%',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                />
              </AspectRatio>
              <IconButton
                aria-label="upload new picture"
                size="sm"
                variant="outlined"
                color="neutral"
                sx={{
                  bgcolor: 'background.body',
                  boxShadow: 'sm',
                  borderRadius: '50%',
                }}
                onClick={() => setModalVisible(true)}
              >
                <EditRoundedIcon />
              </IconButton>
            </Stack>

            <Stack direction="column" spacing={2}>
              <Stack direction="column" spacing={2}>
                <FormControl sx={{ flexGrow: 1 }}>
                  <FormLabel>Prénom</FormLabel>
                  <Input
                    value={firstName}
                    onChange={handleFirstNameChange}
                    size="sm"
                    placeholder="Prénom"
                  />
                </FormControl>

                <FormControl sx={{ flexGrow: 1 }}>
                  <FormLabel>Nom</FormLabel>
                  <Input
                    value={lastName}
                    onChange={handleLastNameChange}
                    size="sm"
                    placeholder="Nom"
                  />
                </FormControl>
              </Stack>

              <FormControl error={invalidBirthdate}>
                <FormLabel>Date de naissance</FormLabel>
                <Input
                  value={birthdate}
                  onChange={handleBirthdateChange}
                  size="sm"
                  type="date"
                />
                {invalidBirthdate && (
                  <FormHelperText color="danger">
                    Date de naissance invalide (Âge minimum : 12 ans)
                  </FormHelperText>
                )}
              </FormControl>

              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                  value={userInfo?.email || ''}
                  size="sm"
                  type="email"
                  startDecorator={<EmailRoundedIcon />}
                  placeholder="email"
                  disabled
                />
              </FormControl>
            </Stack>
          </Stack>

          <ErrorMessage error={errorUpdatingUserInfo} />

          <CardOverflow sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
            <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
              <StyledButton
                color="darkGreen"
                disabled={!isDataValid || updatingUserInfo || isSameData}
                onClick={handleOnSaveUserInfoChanges}
              >
                Enregistrer
              </StyledButton>
            </CardActions>
          </CardOverflow>
        </Card>

        {/* Password change */}
        <Card sx={{ filter: updatingPassword ? 'blur(2px)' : 'none' }}>
          <Box sx={{ mb: 1 }}>
            <Typography level="title-md">Mot de passe</Typography>
            <Typography level="body-sm">
              Changez votre mot de passe quotidien pour une meilleure sécurité.
            </Typography>
          </Box>
          <Divider />
          <FormControl>
            <FormLabel>Mot de passe actuel</FormLabel>
            <Input
              value={currentPassword}
              onChange={(e) => {
                dispatch(changeCurrentPasswordAction(e.target.value));
              }}
              type={showCurrentPassword ? 'text' : 'password'}
              placeholder="********"
              disabled={updatingPassword}
              endDecorator={
                <IconButton
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                >
                  {showCurrentPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              }
            />
          </FormControl>
          <FormControl error={invalidPassword}>
            <FormLabel>Nouveau mot de passe</FormLabel>
            <Input
              value={newPassword}
              onChange={handleNewPasswordChange}
              type={showNewPassword ? 'text' : 'password'}
              placeholder="********"
              disabled={updatingPassword}
              endDecorator={
                <IconButton
                  onClick={() => setShowNewPassword(!showNewPassword)}
                >
                  {showNewPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              }
            />
            {invalidPassword && (
              <FormHelperText color="danger">
                Mot de passe invalide (8 à 24 caractères, sans espace)
              </FormHelperText>
            )}
          </FormControl>
          <FormControl error={!passwordMatch && passwordConfirmation !== ''}>
            <FormLabel>Confirmer le mot de passe</FormLabel>
            <Input
              value={passwordConfirmation}
              onChange={handlePasswordConfirmationChange}
              type={showPasswordConfirmation ? 'text' : 'password'}
              placeholder="********"
              disabled={updatingPassword}
              endDecorator={
                <IconButton
                  onClick={() =>
                    setShowPasswordConfirmation(!showPasswordConfirmation)
                  }
                >
                  {showPasswordConfirmation ? (
                    <Visibility />
                  ) : (
                    <VisibilityOff />
                  )}
                </IconButton>
              }
            />
            {!passwordMatch && passwordConfirmation !== '' && (
              <FormHelperText color="danger">
                Le mot de passe ne correspondent pas
              </FormHelperText>
            )}
          </FormControl>
          <ErrorMessage error={errorUpdatingPassword} />
          <CardOverflow
            sx={{
              borderTop: '1px solid',
              borderColor: 'divider',
              marginTop: '20px',
            }}
          >
            <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
              <StyledButton
                color="darkRed"
                disabled={!passwordMatch || invalidPassword || updatingPassword}
                onClick={handleOnPasswordChangeButtonClick}
              >
                Changer
              </StyledButton>
            </CardActions>
          </CardOverflow>
        </Card>
      </Stack>

      <Modal open={modalVisible} onClose={() => setModalVisible(false)}>
        <ModalDialog variant="plain">
          <ModalClose />
          <DialogTitle>Choisissez une avatar</DialogTitle>
          <DialogContent>
            <Avatars setModalVisible={setModalVisible} />
          </DialogContent>
        </ModalDialog>
      </Modal>

      <MySnackbar
        message="Mot de passe modifié avec succès !"
        open={snackbarOpen}
        setOpen={setSnackbarOpen}
        color="success"
      />
    </Box>
  );
}

UserProfilePage.propTypes = {};

export default UserProfilePage;
