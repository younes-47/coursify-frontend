/**
 *
 * HomePageHeader
 *
 */

import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { StyledHeader } from '../Styled/StyledHeader';
import appLogo from '../../images/app-logo.svg';
import { StyledLogo } from '../Styled/StyledLogo';
import { StyledContainer } from '../Styled/StyledContainer';
import { StyledButton } from '../Styled/StyledButton';
import { StyledLink } from '../Styled/StyledLink';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function HomePageHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <StyledHeader>
      <StyledLogo
        src={appLogo}
        onClick={() => navigate('/', { state: { from: location.pathname } })}
      />

      <StyledContainer>
        <StyledLink
          color="darkPurple"
          onClick={() =>
            navigate('/Signup', { state: { from: location.pathname } })
          }
        >
          S&apos;inscrire
        </StyledLink>

        <StyledButton
          color="darkPurple"
          onClick={() =>
            navigate('/Login', { state: { from: location.pathname } })
          }
        >
          Se connecter
        </StyledButton>
      </StyledContainer>
    </StyledHeader>
  );
}

HomePageHeader.propTypes = {};

export default HomePageHeader;
