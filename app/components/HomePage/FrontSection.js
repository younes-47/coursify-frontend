/**
 *
 * FrontSection
 *
 */

import React from 'react';
import { StyledContainer } from '../Styles/StyledContainer';
import creativeIllustration from '../../images/creative-illustration.svg';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function FrontSection() {
  return (
    <div style={{ padding: '1em 48px' }}>
      <StyledContainer>
        <h1>Front Section</h1>
        <img src={creativeIllustration} alt="placeholder" />
      </StyledContainer>
    </div>
  );
}

FrontSection.propTypes = {};

export default FrontSection;
