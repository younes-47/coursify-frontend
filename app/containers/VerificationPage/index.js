/**
 *
 * VerificationPage
 *
 */

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import Typography from '@mui/joy/Typography';
import VerifiedIcon from '@mui/icons-material/Verified';
import Alert from '@mui/joy/Alert';
import Sheet from '@mui/joy/Sheet';
import FormControl from '@mui/joy/FormControl';
import Input from '@mui/joy/Input';
import ErrorIcon from '@mui/icons-material/Error';
import FormHelperText from '@mui/joy/FormHelperText';
import {
  makeSelectEmail,
  makeSelectErrorSendingVerification,
  makeSelectErrorVerifying,
  makeSelectSendingVerification,
  makeSelectSuccessSendingVerification,
  makeSelectSuccessVerifying,
  makeSelectVerifying,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import HomePageHeader from '../../components/HomeSection/Header';
import Footer from '../../components/HomeSection/Footer';
import { CenteredContainer } from '../../components/Styled/CenteredContainer';
import { validateEmail } from '../../utils/custom/ValidateInputs';
import {
  cleanupStore,
  sendVerificationEmailAction,
  setEmail,
  verifyEmailAction,
} from './actions';
import { StyledButton } from '../../components/Styled/StyledButton';
import ErrorMessage from './ErrorMessage';

const mapStateToProps = createStructuredSelector({
  email: makeSelectEmail(),
  verifying: makeSelectVerifying(),
  successVerifying: makeSelectSuccessVerifying(),
  errorVerifying: makeSelectErrorVerifying(),
  sendingVerification: makeSelectSendingVerification(),
  successSendingVerification: makeSelectSuccessSendingVerification(),
  errorSendingVerification: makeSelectErrorSendingVerification(),
});

export function VerificationPage() {
  useInjectReducer({ key: 'verificationPage', reducer });
  useInjectSaga({ key: 'verificationPage', saga });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [invalidEmail, setInvalidEmail] = useState(false);
  const { token: tokenURL, email: emailURL } = useParams();

  const {
    email,
    verifying,
    successVerifying,
    errorVerifying,
    sendingVerification,
    successSendingVerification,
    errorSendingVerification,
  } = useSelector(mapStateToProps);

  useEffect(() => {
    if (location.state == null) {
      if (emailURL && tokenURL) {
        dispatch(verifyEmailAction({ email: emailURL, token: tokenURL }));
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

  const handleOnVerifyButtonClick = () => {
    dispatch(sendVerificationEmailAction(email));
  };

  return (
    <>
      <HomePageHeader />
      {location.state?.from === '/Signup' && (
        <CenteredContainer>
          <Alert
            size="lg"
            variant="soft"
            color="success"
            startDecorator={<MarkEmailReadIcon />}
            sx={{ maxWidth: '50%' }}
          >
            Nous avons envoyé un lien de vérification à votre adresse e-mail.
            Veuillez vérifier votre boîte de réception et cliquer sur le lien
            pour vérifier votre compte.
          </Alert>
        </CenteredContainer>
      )}
      {location.state?.from === '/Login' && (
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
            filter: sendingVerification ? 'blur(2px)' : 'none',
          }}
          variant="soft"
        >
          <div>
            <Typography level="h4" textAlign="center">
              Saisissez votre email ci dessous pour envoyer un lien de
              vérification
            </Typography>
          </div>
          <FormControl error={invalidEmail}>
            <Input
              value={email}
              onChange={handleEmailChange}
              type="email"
              placeholder="username@email.com"
              disabled={sendingVerification}
            />
            {invalidEmail && (
              <FormHelperText color="danger">
                Addresse e-mail invalide
              </FormHelperText>
            )}
          </FormControl>
          <ErrorMessage error={errorSendingVerification} />
          {successSendingVerification !== null && (
            <CenteredContainer>
              <Alert
                size="lg"
                variant="soft"
                color="success"
                startDecorator={<MarkEmailReadIcon />}
              >
                Nous avons envoyé un lien de vérification à votre adresse
                e-mail. Veuillez vérifier votre boîte de réception et cliquer
                sur le lien pour vérifier votre compte.
              </Alert>
            </CenteredContainer>
          )}

          <StyledButton
            color="darkGreen"
            style={{ marginTop: '1.5em' }}
            disabled={invalidEmail || sendingVerification || email === ''}
            onClick={handleOnVerifyButtonClick}
          >
            Vérifier
          </StyledButton>
        </Sheet>
      )}

      {successVerifying !== null && (
        <CenteredContainer>
          <Alert
            size="lg"
            variant="soft"
            color="success"
            startDecorator={<VerifiedIcon />}
          >
            Votre adresse e-mail a été vérifiée avec succès. Vous pouvez
            maintenant vous connecter.
          </Alert>
        </CenteredContainer>
      )}

      {errorVerifying !== null && (
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

      <section style={{ position: 'absolute', bottom: 0, width: '100%' }}>
        <Footer />
      </section>
    </>
  );
}

export default VerificationPage;
