import React from 'react';
import PropTypes from 'prop-types';
import Alert from '@mui/joy/Alert';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';

function displayErrors(validationObject) {
  if (typeof validationObject === 'string') {
    return (
      <Stack direction="column" alignItems="center" spacing={1}>
        <Typography level="title-md" color="danger">
          Erreur interne
        </Typography>
        <Typography level="title-md">
          {JSON.stringify(validationObject)}
        </Typography>
      </Stack>
    );
  }

  if (typeof validationObject === 'object' && validationObject !== null) {
    return (
      <List marker="disc" color="danger">
        {Object.entries(validationObject).map(([key, errors]) => (
          <React.Fragment key={key}>
            {errors.map((error, index) => (
              <ListItem key={index} color="danger">
                {error}
              </ListItem>
            ))}
          </React.Fragment>
        ))}
      </List>
    );
  }

  return null;
}

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
        <Alert color="danger">
          {errorMessages[error?.response?.data] ||
            displayErrors(error?.response?.data) ||
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
