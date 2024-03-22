import React from 'react';

import CircularProgress from '@mui/joy/CircularProgress';
import Typography from '@mui/joy/Typography';
import Wrapper from './Wrapper';

const LoadingIndicator = () => (
  <Wrapper>
    <CircularProgress color="neutral" size="md" variant="soft" />
    <Typography level="title-lg">En cours...</Typography>
  </Wrapper>
);

export default LoadingIndicator;
