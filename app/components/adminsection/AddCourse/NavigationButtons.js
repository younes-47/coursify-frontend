import React from 'react';
import PropTypes from 'prop-types';
import { Stack } from '@mui/joy';
import FastForwardIcon from '@mui/icons-material/FastForward';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import { CenteredContainer } from '../../Styled/CenteredContainer';
import { StyledButton } from '../../Styled/StyledButton';
import { StyledLink } from '../../Styled/StyledLink';

const NavigationButtons = ({ setCurrentTab, CurrentTab }) => (
  <CenteredContainer>
    <Stack direction="row" spacing={2}>
      {CurrentTab !== 0 && (
        <StyledLink
          color="darkBlue"
          onClick={() => setCurrentTab(CurrentTab - 1)}
        >
          Précedent
        </StyledLink>
      )}
      {CurrentTab !== 4 && (
        <StyledLink
          color="darkBlue"
          onClick={() => setCurrentTab(CurrentTab + 1)}
        >
          Suivant
        </StyledLink>
      )}
    </Stack>
  </CenteredContainer>
);

NavigationButtons.propTypes = {
  setCurrentTab: PropTypes.func,
  CurrentTab: PropTypes.number,
};

export default NavigationButtons;
