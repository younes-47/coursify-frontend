/**
 *
 * PasswordResetPage
 *
 */

import React, { useEffect, useState } from 'react';
import { createStructuredSelector } from 'reselect';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import Alert from '@mui/joy/Alert';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import FormControl from '@mui/joy/FormControl';
import FormHelperText from '@mui/joy/FormHelperText';
import IconButton from '@mui/joy/IconButton';
import LockResetIcon from '@mui/icons-material/LockReset';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { CenteredContainer } from 'components/Styled/CenteredContainer';
import { StyledButton } from 'components/Styled/StyledButton';
import { validateEmail, validatePassword } from 'utils/custom/ValidateInputs';
import { useDispatch, useSelector } from 'react-redux';
import Footer from 'components/HomeSection/Footer';
import HomePageHeader from 'components/HomeSection/Header';
import ErrorIcon from '@mui/icons-material/Error';
import reducer from './reducer';
import saga from './saga';
import {
  makeSelectEmail,
  makeSelectErrorResettingPassword,
  makeSelectErrorSendingPasswordResetEmail,
  makeSelectErrorVerifyingResetPasswordToken,
  makeSelectNewPassword,
  makeSelectResettingPassword,
  makeSelectSendingPasswordResetEmail,
  makeSelectSuccessResettingPassword,
  makeSelectSuccessSendingPasswordResetEmail,
  makeSelectSuccessVerifyingResetPasswordToken,
  makeSelectVerifyingResetPasswordToken,
} from './selectors';
import {
  cleanupStore,
  resetPasswordAction,
  sendResetPasswordEmailAction,
  setEmail,
  setNewPassword,
  verifyResetPasswordTokenAction,
} from './actions';
import ErrorMessage from './ErrorMessage';
import VisibilityOff from '../../components/icons/VisibilityOff';
import Visibility from '../../components/icons/Visibility';

const mapStateToProps = createStructuredSelector({
  email: makeSelectEmail(),
  newPassword: makeSelectNewPassword(),
  sendingPasswordResetEmail: makeSelectSendingPasswordResetEmail(),
  errorSendingPasswordResetEmail: makeSelectErrorSendingPasswordResetEmail(),
  successSendingPasswordResetEmail:
    makeSelectSuccessSendingPasswordResetEmail(),
  verifyingResetPasswordToken: makeSelectVerifyingResetPasswordToken(),
  errorVerifyingResetPasswordToken:
    makeSelectErrorVerifyingResetPasswordToken(),
  successVerifyingResetPasswordToken:
    makeSelectSuccessVerifyingResetPasswordToken(),
  resettingPassword: makeSelectResettingPassword(),
  errorResettingPassword: makeSelectErrorResettingPassword(),
  successResettingPassword: makeSelectSuccessResettingPassword(),
});

export function PasswordResetPage() {
  useInjectReducer({ key: 'passwordResetPage', reducer });
  useInjectSaga({ key: 'passwordResetPage', saga });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { token: tokenURL, email: emailURL } = useParams();

  const {
    email,
    newPassword,
    sendingPasswordResetEmail,
    errorSendingPasswordResetEmail,
    successSendingPasswordResetEmail,
    verifyingResetPasswordToken,
    errorVerifyingResetPasswordToken,
    successVerifyingResetPasswordToken,
    resettingPassword,
    errorResettingPassword,
    successResettingPassword,
  } = useSelector(mapStateToProps);

  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] =
    useState(false);

  useEffect(() => {
    if (location.state == null) {
      if (emailURL && tokenURL) {
        dispatch(
          verifyResetPasswordTokenAction({ email: emailURL, token: tokenURL }),
        );
      } else {
        navigate('/', { state: { from: location.pathname } });
      }
    }
  }, [tokenURL, emailURL]);

  useEffect(
    () => () => {
      dispatch(cleanupStore());
    },
    [],
  );

  const handleEmailChange = (e) => {
    const restult = validateEmail(e.target.value);
    if (!restult) {
      setInvalidEmail(true);
    } else {
      setInvalidEmail(false);
    }
    dispatch(setEmail(e.target.value));
  };

  const handleNewPasswordChange = (e) => {
    const restult = validatePassword(e.target.value);
    if (!restult) {
      setInvalidPassword(true);
    } else {
      setInvalidPassword(false);
    }
    dispatch(setNewPassword(e.target.value));
  };

  const handlePasswordConfirmationChange = (e) => {
    setPasswordConfirmation(e.target.value);
    if (e.target.value === newPassword) {
      setPasswordMatch(true);
    } else {
      setPasswordMatch(false);
    }
  };

  const handleOnResetButtonClick = () => {
    dispatch(sendResetPasswordEmailAction(email));
  };

  const handleOnResetPasswordButtonClick = () => {
    dispatch(
      resetPasswordAction({ email: emailURL, newPassword, token: tokenURL }),
    );
  };

  return (
    <>
      <HomePageHeader />
      {location.pathname === '/Password-reset' && (
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
            filter: sendingPasswordResetEmail ? 'blur(2px)' : 'none',
          }}
          variant="soft"
        >
          <div>
            <Typography level="h4" textAlign="center">
              Saisissez votre email ci dessous pour envoyer un lien de
              réinitialisation de mot de passe
            </Typography>
          </div>
          <FormControl error={invalidEmail}>
            <Input
              value={email}
              onChange={handleEmailChange}
              type="email"
              placeholder="username@email.com"
              disabled={sendingPasswordResetEmail}
            />
            {invalidEmail && (
              <FormHelperText color="danger">
                Addresse e-mail invalide
              </FormHelperText>
            )}
          </FormControl>
          <ErrorMessage error={errorSendingPasswordResetEmail} />
          {successSendingPasswordResetEmail && (
            <CenteredContainer>
              <Alert
                size="lg"
                variant="soft"
                color="success"
                startDecorator={<MarkEmailReadIcon />}
              >
                Nous avons envoyé un lien de réinitialisation de mot de passe à
                votre adresse e-mail. Veuillez vérifier votre boîte de réception
                et cliquer sur le lien pour réinitialiser votre mot de passe.
              </Alert>
            </CenteredContainer>
          )}
          <StyledButton
            color="darkBlue"
            style={{ marginTop: '1.5em' }}
            disabled={invalidEmail || sendingPasswordResetEmail || email === ''}
            onClick={handleOnResetButtonClick}
          >
            Réinitialiser
          </StyledButton>
        </Sheet>
      )}

      {successVerifyingResetPasswordToken && !successResettingPassword && (
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
            filter: resettingPassword ? 'blur(2px)' : 'none',
          }}
          variant="soft"
        >
          <div>
            <Typography level="h4" textAlign="center">
              Saisissez votre nouveau mot de passe
            </Typography>
          </div>
          <FormControl error={invalidPassword}>
            <FormLabel>Nouveau mot de passe</FormLabel>
            <Input
              value={newPassword}
              onChange={handleNewPasswordChange}
              type={showPassword ? 'text' : 'password'}
              placeholder="********"
              disabled={resettingPassword}
              endDecorator={
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <Visibility /> : <VisibilityOff />}
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
              disabled={resettingPassword}
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
          <ErrorMessage error={errorResettingPassword} />
          <StyledButton
            color="darkBlue"
            style={{ marginTop: '1.5em' }}
            disabled={
              invalidPassword ||
              resettingPassword ||
              newPassword === '' ||
              !passwordMatch
            }
            onClick={handleOnResetPasswordButtonClick}
          >
            Confirmer
          </StyledButton>
        </Sheet>
      )}

      {errorVerifyingResetPasswordToken && (
        <CenteredContainer>
          <Alert
            size="lg"
            variant="soft"
            color="danger"
            startDecorator={<ErrorIcon />}
          >
            Lien de vérification invalide ou expiré.
          </Alert>
        </CenteredContainer>
      )}

      {successResettingPassword && (
        <CenteredContainer>
          <Alert
            size="lg"
            variant="soft"
            color="success"
            startDecorator={<LockResetIcon />}
          >
            Votre mot de passe a été réinitialisé avec succès. Vous pouvez
            maintenant vous connecter avec votre nouveau mot de passe.
          </Alert>
        </CenteredContainer>
      )}
      <section style={{ position: 'absolute', bottom: 0, width: '100%' }}>
        <Footer />
      </section>
    </>
  );
}

PasswordResetPage.propTypes = {};

export default PasswordResetPage;
