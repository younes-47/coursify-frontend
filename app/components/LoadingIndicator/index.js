import React from 'react';
import 'animate.css';
import Typography from '@mui/joy/Typography';
import Wrapper from './Wrapper';
import brainLogo from '../../images/brain-icon.png';

const LoadingIndicator = () => (
  <Wrapper>
    {/* <CircularProgress color="neutral" size="md" variant="soft" /> */}
    <img
      height="60px"
      width="60px"
      src={brainLogo}
      alt="coursify-logo-brain-variant"
      className="animate__heartBeat"
    />
    <Typography level="title-lg" fontSize={35} fontWeight={500}>
      En cours...
    </Typography>
  </Wrapper>
);

export default LoadingIndicator;
