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
    CURRENT_TOKEN_NOT_EXPIRED_YET:
      'Vous avez déjà demandé un e-mail de réinitialisation de mot de passe. Veuillez vérifier votre boîte de réception. Vous pouvez réessayer dans 10 minutes.',
    UNKNOWN_EMAIL:
      "Cet addresse e-mail n'est pas enregistrée. Veuillez vérifier votre addresse e-mail et réessayer.",
  };

  if (error !== null) {
    if ('response' in error) {
      return (
        <Alert color="warning" startDecorator={<InfoIcon />}>
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
