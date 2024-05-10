/**
 *
 * NoResultFound
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Sheet from '@mui/joy/Sheet';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import { useTheme } from 'styled-components';
import NoResultIcon from '../icons/NoResult';

function NoResultFound({
  message = 'Aucun résultat trouvé',
  color = 'darkGray',
}) {
  const theme = useTheme();
  return (
    <Sheet
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 'md',
        p: { xs: 5, sm: 8 },
        width: '100%',
      }}
      variant="outlined"
    >
      <Stack direction="column" alignItems="center" spacing={3}>
        <NoResultIcon color={theme.palette[color]} />
        <Typography level="title-lg" sx={{ color: theme.palette[color] }}>
          {message}
        </Typography>
      </Stack>
    </Sheet>
  );
}

NoResultFound.propTypes = {
  message: PropTypes.string,
  color: PropTypes.string,
};

export default NoResultFound;
