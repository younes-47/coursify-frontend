/**
 *
 * JoinSection
 *
 */

import React from 'react';
import { AspectRatio, Box, Stack, Typography } from '@mui/joy';
import { useNavigate, useLocation } from 'react-router-dom';
import { CenteredContainer } from '../Styled/CenteredContainer';
import happyStudent from '../../images/happy-student.jpg';
import { StyledButton } from '../Styled/StyledButton';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function JoinSection() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Stack
      sx={{
        py: { xs: 3, sm: 3, md: '5em' },
        px: { xs: 3, sm: 3, md: '10%' },
        marginTop: '2em',
      }}
      spacing={5}
      direction={{ xs: 'column', sm: 'column', md: 'row' }}
    >
      <Box width="100%" display="flex" justifyContent="center">
        <img
          src={happyStudent}
          alt="Happy student"
          style={{
            maxHeight: '30em',
            objectFit: 'cover',
            borderRadius: '1em',
            boxShadow: '0 0 1em rgba(0, 0, 0, 0.1)',
          }}
        />
      </Box>

      <Stack
        direction="column"
        spacing={3}
        display="flex"
        justifyContent="center"
      >
        <Typography level="h3" style={{ marginBottom: '1em' }}>
          Inscrivez-vous dès maintenant pour accéder à des centaines de cours de
          qualité, et ce, gratuitement !
        </Typography>

        <Box>
          <StyledButton
            color="darkPurple"
            onClick={() =>
              navigate('/Signup', { state: { from: location.pathname } })
            }
            style={{ width: '100%' }}
          >
            S&apos;inscrire
          </StyledButton>
        </Box>
      </Stack>
    </Stack>
  );
}

JoinSection.propTypes = {};

export default JoinSection;
