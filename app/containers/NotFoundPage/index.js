/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import { Stack, Typography } from '@mui/joy';
import { useTheme } from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import notFoundImg from '../../images/not-found-illustration.jpg';
import { StyledLink } from '../../components/Styled/StyledLink';

export default function NotFound() {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';

  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      spacing={2}
      sx={{ height: '100%' }}
      p={{ xs: 2, md: 4 }}
    >
      <img
        src={notFoundImg}
        alt="Page introuvable"
        style={{ height: 'auto', width: '100%', maxWidth: '400px' }}
      />
      <Typography level="h2">Page introuvable!</Typography>
      <Stack direction="column" alignItems="center" textAlign="center">
        <Typography level="title-md">
          Désolé, la page que vous avez demandée n'existe pas.
        </Typography>
        <Typography level="title-md">
          Veuillez vérifier l'URL ou cliquer sur le bouton ci-dessous pour
          revenir.
        </Typography>
      </Stack>
      <StyledLink
        color="lightBrown"
        onClick={() => navigate(from, { replace: true })}
      >
        <Typography
          level="title-md"
          sx={{ color: theme.palette.lightBrown, marginTop: '1em' }}
        >
          Retourner
        </Typography>
      </StyledLink>
    </Stack>
  );
}
