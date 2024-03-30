/**
 *
 * LoginPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Sheet,
  Typography,
} from '@mui/joy';
import makeSelectLoginPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import HomePageHeader from '../../components/HomeSection/Header';
import { StyledLink } from '../../components/Styled/StyledLink';
import { StyledButton } from '../../components/Styled/StyledButton';
import Footer from '../../components/HomeSection/Footer';

const mapStateToProps = createStructuredSelector({
  loginPage: makeSelectLoginPage(),
});

export function LoginPage() {
  useInjectReducer({ key: 'loginPage', reducer });
  useInjectSaga({ key: 'loginPage', saga });

  return (
    <>
      <HomePageHeader />
      <Sheet
        sx={{
          width: 350,
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
          <Typography level="h4" component="h1">
            Bonjours!
          </Typography>
        </div>
        <FormControl>
          <FormLabel>E-mail</FormLabel>
          <Input name="email" type="email" placeholder="username@email.com" />
        </FormControl>
        <FormControl>
          <FormLabel>Mot de passe</FormLabel>
          <Input name="password" type="password" placeholder="******" />
        </FormControl>
        <StyledButton color="darkPurple" style={{ marginTop: '1.5em' }}>
          Se connecter
        </StyledButton>
        <Typography level="body-sm" sx={{ alignSelf: 'center' }}>
          vous n'avez pas de compte ?&nbsp;
          <StyledLink href="/Signup" fontSize="small" color="lightBlue">
            S'inscrire
          </StyledLink>
        </Typography>
      </Sheet>
      <div style={{ position: 'absolute', bottom: 0, width: '100%' }}>
        <Footer />
      </div>
    </>
  );
}

LoginPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

export default LoginPage;
