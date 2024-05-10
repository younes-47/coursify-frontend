/**
 *
 * Footer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Alert from '@mui/joy/Alert';
import InfoIcon from '@mui/icons-material/Info';

function ErrorMessage({ error = null }) {
  const errorMessages = {
    NETWORK_ERROR:
      'Nous rencontrons des difficultés pour nous connecter au serveur. Veuillez vérifier votre connexion Internet et réessayer.',
    INVALID_PASSWORD: 'Le mot de passe est incorrect.',
  };

  if (error !== null) {
    if ('response' in error) {
      return (
        <Alert color="danger" startDecorator={<InfoIcon />}>
          {errorMessages[error?.response?.data] ||
            JSON.stringify(error?.response?.data)}
        </Alert>
      );
    }
    return <Alert color="danger">{errorMessages.NETWORK_ERROR}</Alert>;
  }
  return <></>;
}

ErrorMessage.propTypes = {
  error: PropTypes.object,
};

export default ErrorMessage;
