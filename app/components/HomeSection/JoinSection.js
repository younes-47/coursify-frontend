/**
 *
 * JoinSection
 *
 */

import React from 'react';
import { Typography } from '@mui/joy';
import { CenteredContainer } from '../Styled/CenteredContainer';
import happyStudent from '../../images/happy-student.jpg';
import { StyledButton } from '../Styled/StyledButton';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function JoinSection() {
  return (
    <div
      style={{
        padding: '5em 20%',
        marginTop: '2em',
      }}
    >
      <CenteredContainer style={{ gap: '3em' }}>
        <img
          src={happyStudent}
          alt="Happy student"
          style={{
            height: '400px',
            borderRadius: '1em',
            boxShadow: '0 0 1em rgba(0, 0, 0, 0.1)',
          }}
        />
        <div>
          <Typography level="h2" style={{ marginBottom: '1em' }}>
            Inscrivez-vous dès maintenant pour accéder à des centaines de cours
            de qualité, et ce, gratuitement !
          </Typography>
          <a href="/Signup">
            <StyledButton color="darkPurple">S&apos;inscrire</StyledButton>
          </a>
        </div>
      </CenteredContainer>
    </div>
  );
}

JoinSection.propTypes = {};

export default JoinSection;
