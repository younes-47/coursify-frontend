/**
 *
 * LoginPage
 *
 */

import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Sheet,
  Typography,
} from '@mui/joy';
import Alert from '@mui/joy/Alert';
import validator from 'validator';
import { filter } from 'lodash';
import { StyledInputEndDecorator } from '@mui/joy/Input/Input';
import {
  makeSelectEmail,
  makeSelectErrorLoggingIn,
  makeSelectLoggingIn,
  makeSelectPassword,
  makeSelectSuccessLoggingIn,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import HomePageHeader from '../../components/HomeSection/Header';
import { StyledLink } from '../../components/Styled/StyledLink';
import { StyledButton } from '../../components/Styled/StyledButton';
import Footer from '../../components/HomeSection/Footer';
import {
  validateEmail,
  validatePassword,
} from '../../utils/custom/ValidateInputs';
import { cleanupStore, loginAction, setEmail, setPassword } from './actions';
import Visibility from '../../components/icons/Visibility';
import VisibilityOff from '../../components/icons/VisibilityOff';

const mapStateToProps = createStructuredSelector({
  email: makeSelectEmail(),
  password: makeSelectPassword(),
  loggingIn: makeSelectLoggingIn(),
  errorLoggingIn: makeSelectErrorLoggingIn(),
  successLoggingIn: makeSelectSuccessLoggingIn(),
});

export function LoginPage() {
  useInjectReducer({ key: 'loginPage', reducer });
  useInjectSaga({ key: 'loginPage', saga });
  const dispatch = useDispatch();
  const { email, password, errorLoggingIn, loggingIn, successLoggingIn } =
    useSelector(mapStateToProps);

  const [showPassword, setShowPassword] = useState(false);

  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);

  const isDataValid =
    validator.isEmail(email) &&
    validator.isLength(password, { min: 8, max: 24 });

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

  const handleOnLoginButtonClick = () => {
    dispatch(loginAction({ email, password }));
  };

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
          width: 400,
          mx: 'auto', // margin left & right
          my: 4, // margin top & bottom
          py: 3, // padding top & bottom
          px: 2, // padding left & right
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          borderRadius: 'sm',
          boxShadow: 'md',
          filter: loggingIn ? 'blur(2px)' : 'none',
        }}
        variant="soft"
      >
        <div>
          <Typography level="h4" component="h1">
            Bienvenue!
          </Typography>
        </div>
        <FormControl error={invalidEmail}>
          <FormLabel>E-mail</FormLabel>
          <Input
            value={email}
            onChange={handleEmailChange}
            type="email"
            placeholder="username@email.com"
          />
          {invalidEmail && (
            <FormHelperText>Addresse e-mail invalide</FormHelperText>
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
        {errorLoggingIn != null && (
          <Alert color="danger">{errorLoggingIn?.response?.data}</Alert>
        )}
        <StyledButton
          color="darkPurple"
          style={{ marginTop: '1.5em' }}
          disabled={!isDataValid}
          onClick={handleOnLoginButtonClick}
        >
          Se connecter
        </StyledButton>
        <Typography level="body-sm" sx={{ alignSelf: 'center' }}>
          vous n'avez pas de compte ?&nbsp;
          <StyledLink href="/Signup" fontSize="small" color="lightBlue">
            S'inscrire
          </StyledLink>
        </Typography>
      </Sheet>
      <section style={{ position: 'absolute', bottom: 0, width: '100%' }}>
        <Footer />
      </section>
    </>
  );
}

LoginPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

export default LoginPage;
