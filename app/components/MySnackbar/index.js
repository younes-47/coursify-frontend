/**
 *
 * MySnackbar
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@mui/joy/Snackbar';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DangerousSharpIcon from '@mui/icons-material/DangerousSharp';
import InfoSharpIcon from '@mui/icons-material/InfoSharp';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import IconButton from '@mui/joy/IconButton';
// import styled from 'styled-components';

function MySnackbar({ message, open, setOpen, color = 'neutral' }) {
  const startIcon = () => {
    if (color === 'success') {
      return <CheckCircleIcon />;
    }
    if (color === 'error') {
      return <DangerousSharpIcon />;
    }
    return <InfoSharpIcon />;
  };
  return (
    <Snackbar
      variant="solid"
      open={open}
      autoHideDuration={3000}
      onClose={() => setOpen(false)}
      message={message}
      color={color}
      startDecorator={startIcon()}
      endDecorator={
        <IconButton
          variant="solid"
          onClick={() => setOpen(false)}
          size="sm"
          color={color}
        >
          <CloseSharpIcon />
        </IconButton>
      }
    >
      {message}
    </Snackbar>
  );
}

MySnackbar.propTypes = {
  message: PropTypes.string,
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  color: PropTypes.string,
};

export default MySnackbar;
