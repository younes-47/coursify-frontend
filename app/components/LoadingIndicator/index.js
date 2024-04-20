import React from 'react';
import 'animate.css';

import CircularProgress from '@mui/joy/CircularProgress';
import Typography from '@mui/joy/Typography';
import Wrapper from './Wrapper';
import brainLogo from '../../images/brain-icon.png';

const LoadingIndicator = () => (
  <Wrapper>
    {/* <CircularProgress color="neutral" size="md" variant="soft" /> */}
    <img
      height="35px"
      width="35px"
      src={brainLogo}
      alt="coursify-logo-brain-variant"
      className="animate__heartBeat"
    />
    <Typography level="title-lg">En cours...</Typography>
  </Wrapper>
);

export default LoadingIndicator;
