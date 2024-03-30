/**
 *
 * Footer
 *
 */

import React from 'react';
import { Link, Typography } from '@mui/joy';
import { useTheme } from 'styled-components';
import { CenteredContainer } from '../Styled/CenteredContainer';
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
      <CenteredContainer>
        <Typography level="body-md">
          Copyright &copy; {currentYear} | Developed by{' '}
          <Link
            href="https://www.linkedin.com/in/younes-khoubaz/"
            target="_blank"
            color="primary"
          >
            Younes Khoubaz
          </Link>
        </Typography>
      </CenteredContainer>
    </div>
  );
}

Footer.propTypes = {};

export default Footer;
