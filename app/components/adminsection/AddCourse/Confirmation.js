import React from 'react';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/joy/CircularProgress';
import { useDispatch } from 'react-redux';
import { Box } from '@mui/joy';
import { StyledButton } from '../../Styled/StyledButton';
import ErrorMessage from '../../../containers/AdminCoursesAdd/ErrorMessage';
import LoadingIndicator from '../../LoadingIndicator';

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
        borderRadius: 'sm',
      }}
      variant="outlined"
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          filter: adding ? 'blur(2px)' : 'none',
        }}
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
          disabled={adding || data?.courseInfo?.courseCategoryId === null}
        >
          Ajouter course au platforme
        </StyledButton>
      </Box>

      {adding && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 100,
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
          }}
        >
          <LoadingIndicator color="secondary" />
        </div>
      )}
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
