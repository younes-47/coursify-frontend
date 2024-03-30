/**
 *
 * SignupPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Link,
  Sheet,
  Stack,
  Typography,
} from '@mui/joy';
import makeSelectSignupPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import HomePageHeader from '../../components/HomeSection/Header';
import { StyledLink } from '../../components/Styled/StyledLink';
import { StyledButton } from '../../components/Styled/StyledButton';
import Footer from '../../components/HomeSection/Footer';

const mapStateToProps = createStructuredSelector({});

export function SignupPage() {
  useInjectReducer({ key: 'signupPage', reducer });
  useInjectSaga({ key: 'signupPage', saga });

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
            <Input type="text" placeholder="Prénom" />
          </FormControl>

          <FormControl>
            <FormLabel>Nom de famille</FormLabel>
            <Input type="text" placeholder="Nom de famille" />
          </FormControl>
        </Stack>
        <FormControl>
          <FormLabel>Date de naissance</FormLabel>
          <Input type="date" />
        </FormControl>
        <FormControl>
          <FormLabel>E-mail</FormLabel>
          <Input type="email" placeholder="username@email.com" />
        </FormControl>
        <FormControl>
          <FormLabel>Mot de passe</FormLabel>
          <Input type="password" placeholder="******" />
        </FormControl>
        <StyledButton color="darkPurple" style={{ marginTop: '1.5em' }}>
          S'inscrire
        </StyledButton>
        <Typography level="body-sm" sx={{ alignSelf: 'center' }}>
          Vous avez déjà un compte ?&nbsp;
          <StyledLink href="/Login" fontSize="small" color="lightBlue">
            Se connecter
          </StyledLink>
        </Typography>
      </Sheet>
      <div style={{ position: 'absolute', bottom: 0, width: '100%' }}>
        <Footer />
      </div>
    </>
  );
}

SignupPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

export default SignupPage;
