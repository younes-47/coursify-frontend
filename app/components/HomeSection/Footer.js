/**
 *
 * Footer
 *
 */

import React from 'react';
import Typography from '@mui/joy/Typography';
import { useTheme } from 'styled-components';
import { StyledLink } from '../Styled/StyledLink';

function Footer() {
  const currentYear = new Date().getFullYear();
  const theme = useTheme();
  return (
    <footer style={{ position: 'relative', bottom: 0, width: '100%' }}>
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
    </footer>
  );
}

Footer.propTypes = {};

export default Footer;
