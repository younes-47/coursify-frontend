/**
 *
 * AdminSettings
 *
 */

import React, { useEffect, useState } from 'react';
import { createStructuredSelector } from 'reselect';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import {
  Box,
  Card,
  CardActions,
  CardOverflow,
  Divider,
  FormControl,
  FormHelperText,
  FormLabel,
  IconButton,
  Input,
  Stack,
  Typography,
} from '@mui/joy';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import VisibilityOff from '../../components/icons/VisibilityOff';
import Visibility from '../../components/icons/Visibility';
import reducer from './reducer';
import saga from './saga';
import MySnackbar from '../../components/MySnackbar';
import { StyledButton } from '../../components/Styled/StyledButton';
import ErrorMessage from './ErrorMessage';
import {
  validateData,
  validateDate,
  validatePassword,
} from '../../utils/custom/ValidateInputs';
import { formatName } from '../../utils/custom/stringManipulation';
import * as selectors from './selectors';
import useAuth from '../../utils/custom/hooks/useAuth';
import {
  changeBirthdateAction,
  changeCurrentPasswordAction,
  changeFirstNameAction,
  changeLastNameAction,
  changeNewPasswordAction,
  cleanupStore,
  updateAdminInfoAction,
  updatePasswordAction,
} from './actions';

const mapStateToProps = createStructuredSelector({
  firstName: selectors.makeSelectFirstName(),
  lastName: selectors.makeSelectLastName(),
  birthdate: selectors.makeSelectBirthdate(),
  newPassword: selectors.makeSelectNewPassword(),
  currentPassword: selectors.makeSelectCurrentPassword(),
  updatingAdminInfo: selectors.makeSelectUpdatingAdminInfo(),
  errorUpdatingAdminInfo: selectors.makeSelectErrorUpdatingAdminInfo(),
  successUpdatingAdminInfo: selectors.makeSelectSuccessUpdatingAdminInfo(),
  updatingPassword: selectors.makeSelectUpdatingPassword(),
  errorUpdatingPassword: selectors.makeSelectErrorUpdatingPassword(),
  successUpdatingPassword: selectors.makeSelectSuccessUpdatingPassword(),
});

export function AdminSettings() {
  useInjectReducer({ key: 'adminSettings', reducer });
  useInjectSaga({ key: 'adminSettings', saga });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userInfo } = useAuth();

  const {
    firstName,
    lastName,
    birthdate,
    newPassword,
    currentPassword,
    updatingAdminInfo,
    errorUpdatingAdminInfo,
    successUpdatingAdminInfo,
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

  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const newUserData = {
    firstName,
    lastName,
    birthdate,
  };

  const newPasswordData = { currentPassword, newPassword };

  const isSameData =
    userInfo?.firstName === newUserData.firstName &&
    userInfo?.lastName === newUserData.lastName &&
    userInfo?.birthdate === newUserData.birthdate;

  useEffect(() => {
    if (userInfo) {
      dispatch(changeFirstNameAction(userInfo.firstName));
      dispatch(changeLastNameAction(userInfo.lastName));
      dispatch(changeBirthdateAction(userInfo.birthdate));
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
    if (successUpdatingAdminInfo !== null) navigate(0);
  }, [successUpdatingAdminInfo]);

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
    dispatch(updateAdminInfoAction(newUserData));
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
          maxWidth: '700px',
          mx: 'auto',
          px: { xs: 2, md: 6 },
          py: { xs: 2, md: 3 },
        }}
      >
        <Card sx={{ filter: updatingAdminInfo ? 'blur(2px)' : 'none' }}>
          <Box sx={{ mb: 1 }}>
            <Typography level="title-md">Informations personnelles</Typography>
          </Box>
          <Divider />

          {/* WIDE SCREEN */}
          <Stack
            direction="column"
            spacing={3}
            sx={{
              display: { xs: 'none', md: 'flex' },
              my: 1,
            }}
          >
            <Stack direction="column" spacing={2}>
              <Stack direction="row" spacing={2}>
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

          {/* MOBILE SCREEN */}
          <Stack
            direction="column"
            spacing={2}
            sx={{
              display: { xs: 'flex', md: 'none' },
              my: 1,
            }}
          >
            <Stack direction="column" spacing={2}>
              <Stack direction="row" spacing={2}>
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

          <ErrorMessage error={errorUpdatingAdminInfo} />

          <CardOverflow sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
            <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
              <StyledButton
                color="darkGreen"
                disabled={!isDataValid || updatingAdminInfo || isSameData}
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

      <MySnackbar
        message="Mot de passe modifié avec succès !"
        open={snackbarOpen}
        setOpen={setSnackbarOpen}
        color="success"
      />
    </Box>
  );
}

AdminSettings.propTypes = {};

export default AdminSettings;
