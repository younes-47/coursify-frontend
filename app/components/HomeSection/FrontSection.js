/**
 *
 * FrontSection
 *
 */

import React from 'react';
import { Box, Stack, Typography } from '@mui/joy';
import { StyledContainer } from '../Styled/StyledContainer';
import creativeIllustration from '../../images/creative-illustration.svg';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function FrontSection() {
  return (
    <>
      <Stack
        direction="row"
        display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }}
        textAlign="center"
        sx={{ px: 5, py: 2 }}
      >
        <Box
          width={{ xs: 1, sm: 1, md: 0.5, lg: 0.5 }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography level="h2" fontWeight={400}>
            Améliorez vos compétences et libérez votre potentiel avec nos cours
            gratuits
          </Typography>
        </Box>

        <Box width={{ xs: 1, sm: 1, md: 0.5, lg: 0.5 }}>
          <img
            src={creativeIllustration}
            alt="Créativité"
            style={{ maxHeight: '35em', minHeight: '35em' }}
          />
        </Box>
      </Stack>
      <Stack
        direction="column"
        display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none' }}
        textAlign="center"
        sx={{ px: 3, py: 2 }}
        spacing={3.5}
      >
        <Box
          width={{ xs: 1, sm: 1, md: 0.5, lg: 0.5 }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography level="h2" fontWeight={400}>
            Améliorez vos compétences et libérez votre potentiel avec nos cours
            gratuits
          </Typography>
        </Box>

        <Box width={{ xs: 1, sm: 1, md: 0.5, lg: 0.5 }}>
          <img
            src={creativeIllustration}
            alt="Créativité"
            style={{ maxHeight: '35em', minHeight: '10em' }}
          />
        </Box>
      </Stack>
    </>
  );
}

FrontSection.propTypes = {};

export default FrontSection;
