import React from 'react';

import CircularProgress from '@mui/joy/CircularProgress';
import Wrapper from './Wrapper';

const LoadingIndicator = () => (
  <Wrapper>
    <CircularProgress color="neutral" size="md" variant="soft" />
  </Wrapper>
);

export default LoadingIndicator;
