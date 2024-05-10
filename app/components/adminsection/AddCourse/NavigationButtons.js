import React from 'react';
import PropTypes from 'prop-types';
import Stack from '@mui/joy/Stack';
import { CenteredContainer } from '../../Styled/CenteredContainer';
import { StyledLink } from '../../Styled/StyledLink';

const NavigationButtons = ({ setCurrent, current, lastIndex }) => (
  <CenteredContainer>
    <Stack direction="row" spacing={2}>
      {current !== 0 && (
        <StyledLink color="darkBlue" onClick={() => setCurrent(current - 1)}>
          Précedent
        </StyledLink>
      )}
      {current !== lastIndex && (
        <StyledLink color="darkBlue" onClick={() => setCurrent(current + 1)}>
          Suivant
        </StyledLink>
      )}
    </Stack>
  </CenteredContainer>
);

NavigationButtons.propTypes = {
  setCurrent: PropTypes.func,
  current: PropTypes.number,
  lastIndex: PropTypes.number,
};

export default NavigationButtons;
