/**
 *
 * SignupPage
 *
 */

import React, { useEffect, useState } from 'react';
import { createStructuredSelector } from 'reselect';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import Alert from '@mui/joy/Alert';
import FormControl from '@mui/joy/FormControl';
import FormHelperText from '@mui/joy/FormHelperText';
import FormLabel from '@mui/joy/FormLabel';
import IconButton from '@mui/joy/IconButton';
import Input from '@mui/joy/Input';
import Sheet from '@mui/joy/Sheet';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  makeSelectBirthdate,
  makeSelectEmail,
  makeSelectErrorSigningUp,
  makeSelectFirstName,
  makeSelectLastName,
  makeSelectPassword,
  makeSelectSigningUp,
  makeSelectSuccessSigningUp,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import HomePageHeader from '../../components/HomeSection/Header';
import { StyledLink } from '../../components/Styled/StyledLink';
import { StyledButton } from '../../components/Styled/StyledButton';
import Footer from '../../components/HomeSection/Footer';
import {
  cleanupStore,
  setBirthdate,
  setEmail,
  setFirstName,
  setLastName,
  setPassword,
  signupAction,
} from './actions';
import { formatName } from '../../utils/custom/stringManipulation';
import {
  validateData,
  validateDate,
  validateEmail,
  validatePassword,
} from '../../utils/custom/ValidateInputs';
import Visibility from '../../components/icons/Visibility';
import VisibilityOff from '../../components/icons/VisibilityOff';
const mapStateToProps = createStructuredSelector({
  firstName: makeSelectFirstName(),
  lastName: makeSelectLastName(),
  birthdate: makeSelectBirthdate(),
  email: makeSelectEmail(),
  password: makeSelectPassword(),
  signingUp: makeSelectSigningUp(),
  errorSigningUp: makeSelectErrorSigningUp(),
  successSigningUp: makeSelectSuccessSigningUp(),
});

export function SignupPage() {
  useInjectReducer({ key: 'signupPage', reducer });
  useInjectSaga({ key: 'signupPage', saga });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [showPassword, setShowPassword] = useState(false);

  const [invalidBirthdate, setInvalidBirthdate] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [isDataValid, setIsDataValid] = useState(false);

  const {
    firstName,
    lastName,
    birthdate,
    email,
    password,
    signingUp,
    errorSigningUp,
    successSigningUp,
  } = useSelector(mapStateToProps);

  const handleFirstNameChange = (e) => {
    const formattedName = formatName(e.target.value);
    dispatch(setFirstName(formattedName));
  };
  const handleLastNameChange = (e) => {
    const formattedName = formatName(e.target.value);
    dispatch(setLastName(formattedName));
  };

  const handleBirthdateChange = (e) => {
    const restult = validateDate(e.target.value);
    if (!restult) {
      setInvalidBirthdate(true);
    } else {
      setInvalidBirthdate(false);
    }
    dispatch(setBirthdate(e.target.value));
  };

  const handleEmailChange = (e) => {
    const restult = validateEmail(e.target.value);
    if (!restult) {
      setInvalidEmail(true);
    } else {
      setInvalidEmail(false);
    }
    dispatch(setEmail(e.target.value));
  };

  const handlePasswordChange = (e) => {
    const restult = validatePassword(e.target.value);
    if (!restult) {
      setInvalidPassword(true);
    } else {
      setInvalidPassword(false);
    }
    dispatch(setPassword(e.target.value));
  };

  const handleOnSignupButtonClick = () => {
    dispatch(
      signupAction({
        firstName,
        lastName,
        birthdate,
        email,
        password,
      }),
    );
  };

  useEffect(() => {
    setIsDataValid(
      validateData({
        firstName,
        lastName,
        birthdate,
        email,
        password,
      }),
    );
  }, [firstName, lastName, birthdate, email, password]);

  useEffect(() => {
    if (successSigningUp !== null) {
      navigate('/Verify', { state: { from: location.pathname } });
    }
  }, [successSigningUp]);

  useEffect(
    () => () => {
      dispatch(cleanupStore());
    },
    [],
  );
  return (
    <>
      <HomePageHeader />
      <Sheet
        sx={{
          width: { xs: '90%', sm: 460 },
          mx: { xs: '5%', sm: 'auto' }, // margin left & right
          my: 4, // margin top & bottom
          py: 3, // padding top & bottom
          px: 2, // padding left & right
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          borderRadius: 'sm',
          boxShadow: 'md',
          filter: signingUp ? 'blur(2px)' : 'none',
        }}
        variant="soft"
      >
        <div>
          <Typography level="h4" textAlign="center">
            Inscrivez-vous et commencez à apprendre maintenant !
          </Typography>
        </div>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <FormControl>
            <FormLabel>Prénom</FormLabel>
            <Input
              value={firstName}
              onChange={handleFirstNameChange}
              type="text"
              placeholder="Prénom"
              disabled={signingUp}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Nom de famille</FormLabel>
            <Input
              type="text"
              value={lastName}
              onChange={handleLastNameChange}
              placeholder="Nom de famille"
              disabled={signingUp}
            />
          </FormControl>
        </Stack>
        <FormControl error={invalidBirthdate}>
          <FormLabel>Date de naissance</FormLabel>
          <Input
            value={birthdate}
            onChange={handleBirthdateChange}
            type="date"
            disabled={signingUp}
          />
          {invalidBirthdate && (
            <FormHelperText color="danger">
              Date de naissance invalide (Âge minimum : 12 ans)
            </FormHelperText>
          )}
        </FormControl>
        <FormControl error={invalidEmail}>
          <FormLabel>E-mail</FormLabel>
          <Input
            value={email}
            onChange={handleEmailChange}
            type="email"
            placeholder="username@email.com"
            disabled={signingUp}
          />
          {invalidEmail && (
            <FormHelperText color="danger">
              Addresse e-mail invalide
            </FormHelperText>
          )}
        </FormControl>
        <FormControl error={invalidPassword}>
          <FormLabel>Mot de passe</FormLabel>
          <Input
            value={password}
            onChange={handlePasswordChange}
            type={showPassword ? 'text' : 'password'}
            placeholder="********"
            endDecorator={
              <IconButton onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            }
            disabled={signingUp}
          />
          {invalidPassword && (
            <FormHelperText>
              Mot de passe invalide (8 à 24 caractères, sans espace)
            </FormHelperText>
          )}
        </FormControl>
        {errorSigningUp != null && (
          <Alert color="danger">
            {errorSigningUp?.response?.data ||
              'Nous rencontrons des difficultés pour nous connecter au serveur. Veuillez vérifier votre connexion Internet et réessayer.'}
          </Alert>
        )}
        <StyledButton
          color="darkPurple"
          style={{ marginTop: '1.5em' }}
          disabled={!isDataValid || signingUp}
          onClick={handleOnSignupButtonClick}
        >
          S'inscrire
        </StyledButton>
        <Typography level="body-sm" sx={{ alignSelf: 'center' }}>
          Vous avez déjà un compte ?&nbsp;
          <StyledLink
            fontSize="small"
            color="lightBlue"
            onClick={() =>
              navigate('/Login', { state: { from: location.pathname } })
            }
          >
            Se connecter
          </StyledLink>
        </Typography>
      </Sheet>

      <Footer />
    </>
  );
}

SignupPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

export default SignupPage;
