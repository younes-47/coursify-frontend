import React from 'react';

import { Sheet, Typography } from '@mui/joy';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { StyledButton } from '../../Styled/StyledButton';
import ErrorMessage from '../../../containers/AdminCoursesAdd/ErrorMessage';

const Confirmation = ({ adding, add, data, error }) => {
  const dispatch = useDispatch();
  return (
    <Sheet
      sx={{
        width: { xs: '100%', md: '600px', lg: '700px' },
        mx: 'auto', // margin left & right
        my: 4, // margin top & bottom
        py: 3, // padding top & bottom
        px: 2, // padding left & right
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        borderRadius: 'sm',
        filter: adding ? 'blur(2px)' : 'none',
      }}
      variant="outlined"
    >
      <Typography level="title-lg">Confirmation</Typography>
      <Typography level="title-md">
        Veuillez vérifier toutes les informations avant de continuer. En
        cliquant sur ce bouton, vous allez ajouter la course, qui sera
        disponible pour les utilisateurs afin de s&apos;y inscrire. Êtes-vous
        sûr de vouloir continuer ?
      </Typography>
      {error && <ErrorMessage error={error} />}
      <StyledButton
        color="darkOrange"
        onClick={() => dispatch(add(data))}
        disabled={adding}
      >
        Ajouter course au platforme
      </StyledButton>
    </Sheet>
  );
};

Confirmation.propTypes = {
  adding: PropTypes.bool,
  add: PropTypes.func,
  data: PropTypes.object,
  error: PropTypes.object,
};

export default Confirmation;
