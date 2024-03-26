/**
 *
 * FrontSection
 *
 */

import React from 'react';
import { Box, Typography } from '@mui/joy';
import { StyledContainer } from '../Styled/StyledContainer';
import creativeIllustration from '../../images/creative-illustration.svg';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function FrontSection() {
  return (
    <div
      style={{
        padding: '1em 10%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10%',
        }}
      >
        <Typography level="h2">
          Améliorez vos compétences et libérez votre potentiel avec nos cours
          gratuits
        </Typography>
        <img
          src={creativeIllustration}
          alt="placeholder"
          style={{ height: '35em' }}
        />
      </Box>
    </div>
  );
}

FrontSection.propTypes = {};

export default FrontSection;
