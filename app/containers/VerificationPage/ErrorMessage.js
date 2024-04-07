/**
 *
 * Footer
 *
 */

import React from 'react';
import { Link, Typography } from '@mui/joy';
import { useTheme } from 'styled-components';
import PropTypes from 'prop-types';
import Alert from '@mui/joy/Alert';
import { StyledLink } from '../../components/Styled/StyledLink';
// import styled from 'styled-components';

function ErrorMessage({ error = null }) {
  const errorMessages = {
    NETWORK_ERROR:
      'Nous rencontrons des difficultés pour nous connecter au serveur. Veuillez vérifier votre connexion Internet et réessayer.',
    CURRENT_TOKEN_NOT_EXPIRED_YET:
      'Vous avez déjà reçu un e-mail de vérification. Veuillez vérifier votre boîte de réception. Vous pouvez réessayer dans 10 minutes.',
    UNKNOWN_EMAIL:
      "Cet addresse e-mail n'est pas enregistrée. Veuillez vérifier votre addresse e-mail et réessayer.",
    EMAIL_ALREADY_VERIFIED:
      'Votre adresse e-mail est déjà vérifiée. Veuillez vous connecter.',
  };

  if (error !== null) {
    if ('response' in error) {
      return (
        <Alert color="warning">
          {errorMessages[error?.response?.data] || error?.response?.data}
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
