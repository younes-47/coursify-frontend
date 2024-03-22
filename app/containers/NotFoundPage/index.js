/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import notFoundImg from '../../images/not-found-illustration.jpg';
import { StyledLink } from '../../components/Styles/StyledLink';

export default function NotFound() {
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
        <p>
          Désolé, la page que vous avez demandée n'existe pas. Veuillez vérifier
          l'URL ou cliquer sur le bouton ci-dessous pour revenir à la page
          d'accueil.
        </p>
        <StyledLink color="lightBrown" href="/">
          Retour à l'accueil
        </StyledLink>
      </div>
    </div>
  );
}
