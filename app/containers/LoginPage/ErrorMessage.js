/**
 *
 * Footer
 *
 */

import React from 'react';
import { Link, Typography } from '@mui/joy';
import { useTheme } from 'styled-components';
import PropTypes from 'prop-types';
import { useNavigate, useLocation } from 'react-router-dom';
import Alert from '@mui/joy/Alert';
import { StyledLink } from '../../components/Styled/StyledLink';
// import styled from 'styled-components';

function ErrorMessage({ error = null }) {
  const navigate = useNavigate();
  const location = useLocation();
  const errorMessages = {
    NETWORK_ERROR:
      'Nous rencontrons des difficultés pour nous connecter au serveur. Veuillez vérifier votre connexion Internet et réessayer.',
    UNKNOWN_EMAIL:
      "Cet addresse e-mail n'est pas enregistrée. Veuillez vérifier votre addresse e-mail et réessayer.",
    INVALID_PASSWORD:
      'Mot de passe incorrect. Veuillez vérifier votre mot de passe et réessayer.',
    UNVERIFIED_EMAIL:
      "Votre adresse e-mail n'est pas vérifiée. Veuiller clicker sur le lien ci dessous pour vérifier.",
  };

  const alertColor =
    error?.response?.data === 'UNVERIFIED_EMAIL' ? 'warning' : 'danger';

  if (error !== null) {
    if ('response' in error) {
      if (error?.response?.data === 'UNVERIFIED_EMAIL') {
        return (
          <Alert
            color={alertColor}
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            {errorMessages[error?.response?.data]}

            <StyledLink
              onClick={() =>
                navigate('/Verify', { state: { from: location.pathname } })
              }
              fontSize="small"
              color="lightBlue"
            >
              Vérifier
            </StyledLink>
          </Alert>
        );
      }
      return (
        <Alert color={alertColor}>
          {errorMessages[error?.response?.data] ||
            JSON.stringify(error?.response?.data)}
        </Alert>
      );
    }
    return <Alert color={alertColor}>{errorMessages.NETWORK_ERROR}</Alert>;
  }
  return <></>;
}

ErrorMessage.propTypes = {
  error: PropTypes.object,
};

export default ErrorMessage;
