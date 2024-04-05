/**
 *
 * SignupPage
 *
 */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import {
  Alert,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Sheet,
  Stack,
  Typography,
} from '@mui/joy';
import { useDispatch, useSelector } from 'react-redux';
import { StyledInputEndDecorator } from '@mui/joy/Input/Input';
import {
  makeSelectBirthdate,
  makeSelectEmail,
  makeSelectFirstName,
  makeSelectLastName,
  makeSelectPassword,
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
});

export function SignupPage() {
  useInjectReducer({ key: 'signupPage', reducer });
  useInjectSaga({ key: 'signupPage', saga });

  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);

  const [invalidBirthdate, setInvalidBirthdate] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [isDataValid, setIsDataValid] = useState(false);

  const { firstName, lastName, birthdate, email, password } =
    useSelector(mapStateToProps);

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
          width: 460,
          mx: 'auto', // margin left & right
          my: 4, // margin top & bottom
          py: 3, // padding top & bottom
          px: 2, // padding left & right
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          borderRadius: 'sm',
          boxShadow: 'md',
        }}
        variant="soft"
      >
        <div>
          <Typography level="h4" textAlign="center">
            Inscrivez-vous et commencez à apprendre maintenant !
          </Typography>
        </div>
        <Stack direction="row" spacing={2}>
          <FormControl>
            <FormLabel>Prénom</FormLabel>
            <Input
              value={firstName}
              onChange={handleFirstNameChange}
              type="text"
              placeholder="Prénom"
            />
          </FormControl>

          <FormControl>
            <FormLabel>Nom de famille</FormLabel>
            <Input
              type="text"
              value={lastName}
              onChange={handleLastNameChange}
              placeholder="Nom de famille"
            />
          </FormControl>
        </Stack>
        <FormControl error={invalidBirthdate}>
          <FormLabel>Date de naissance</FormLabel>
          <Input
            value={birthdate}
            onChange={handleBirthdateChange}
            type="date"
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
            placeholder="******"
            endDecorator={
              <StyledInputEndDecorator
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </StyledInputEndDecorator>
            }
          />
          {invalidPassword && (
            <FormHelperText>
              Mot de passe invalide (8 à 24 caractères, sans espace)
            </FormHelperText>
          )}
        </FormControl>
        <StyledButton
          color="darkPurple"
          style={{ marginTop: '1.5em' }}
          disabled={!isDataValid}
        >
          S'inscrire
        </StyledButton>
        <Typography level="body-sm" sx={{ alignSelf: 'center' }}>
          Vous avez déjà un compte ?&nbsp;
          <StyledLink href="/Login" fontSize="small" color="lightBlue">
            Se connecter
          </StyledLink>
        </Typography>
      </Sheet>
      <section style={{ position: 'relative', bottom: 0, width: '100%' }}>
        <Footer />
      </section>
    </>
  );
}

SignupPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

export default SignupPage;
