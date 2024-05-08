/**
 *
 * Footer
 *
 */

import React from 'react';
import { Link, Typography } from '@mui/joy';
import { useTheme } from 'styled-components';
import { CenteredContainer } from '../Styled/CenteredContainer';
import { StyledLink } from '../Styled/StyledLink';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Footer() {
  const currentYear = new Date().getFullYear();
  const theme = useTheme();
  return (
    <div
      style={{
        // backgroundColor: theme.palette.lightGray,
        padding: '1em 0',
        marginTop: '2em',
      }}
    >
      <Typography level="body-md" textAlign="center">
        &copy; {currentYear} | Developed by{' '}
        <StyledLink
          href="https://www.linkedin.com/in/younes-khoubaz/"
          target="_blank"
          color="lightBrown"
          fontSize="medium"
        >
          Younes Khoubaz
        </StyledLink>
      </Typography>
    </div>
  );
}

Footer.propTypes = {};

export default Footer;
