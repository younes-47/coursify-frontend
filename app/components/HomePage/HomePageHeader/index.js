/**
 *
 * HomePageHeader
 *
 */

import React from 'react';
import { StyledHeader } from '../../Styles/StyledHeader';
import appLogo from '../../../images/app-logo.svg';
import { StyledLogo } from '../../Styles/StyledLogo';
import { StyledContainer } from '../../Styles/StyledContainer';
import { StyledButton } from '../../Styles/StyledButton';
import { StyledLink } from '../../Styles/StyledLink';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function HomePageHeader() {
  return (
    <StyledHeader>
      <a href="/">
        <StyledLogo src={appLogo} />
      </a>
      <StyledContainer>
        <StyledLink href="/Signup" color="darkPurple">
          S&apos;inscrire
        </StyledLink>

        <a href="/Login">
          <StyledButton color="darkPurple">Se connecter</StyledButton>
        </a>
      </StyledContainer>
    </StyledHeader>
  );
}

HomePageHeader.propTypes = {};

export default HomePageHeader;
