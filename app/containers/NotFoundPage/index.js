/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import { Typography } from '@mui/joy';
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
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '2em',
      }}
    >
      <img
        src={notFoundImg}
        alt="Page introuvable"
        style={{ height: '20em' }}
      />
      <h2>Page introuvable!</h2>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          width: '40%',
        }}
      >
        <Typography level="title-md">
          Désolé, la page que vous avez demandée n'existe pas. Veuillez vérifier
          l'URL ou cliquer sur le bouton ci-dessous pour revenir.
        </Typography>
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
      </div>
    </div>
  );
}
