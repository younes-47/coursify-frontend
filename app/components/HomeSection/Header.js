/**
 *
 * HomePageHeader
 *
 */

import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Box from '@mui/joy/Box';
import Dropdown from '@mui/joy/Dropdown';
import IconButton from '@mui/joy/IconButton';
import ListDivider from '@mui/joy/ListDivider';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from 'styled-components';
import { StyledHeader } from '../Styled/StyledHeader';
import appLogo from '../../images/app-logo.svg';
import { StyledLogo } from '../Styled/StyledLogo';
import { StyledContainer } from '../Styled/StyledContainer';
import { StyledButton } from '../Styled/StyledButton';
import { StyledLink } from '../Styled/StyledLink';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function HomePageHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  return (
    <StyledHeader>
      <StyledLogo
        src={appLogo}
        onClick={() => navigate('/', { state: { from: location.pathname } })}
      />

      <Box display={{ xs: 'none', sm: 'block' }}>
        <StyledContainer>
          <StyledLink
            color="darkPurple"
            onClick={() =>
              navigate('/Signup', { state: { from: location.pathname } })
            }
          >
            S&apos;inscrire
          </StyledLink>

          <StyledButton
            color="darkPurple"
            onClick={() =>
              navigate('/Login', { state: { from: location.pathname } })
            }
          >
            Se connecter
          </StyledButton>
        </StyledContainer>
      </Box>

      <Box display={{ xs: 'block', sm: 'none' }}>
        <Dropdown>
          <MenuButton
            slots={{ root: IconButton }}
            slotProps={{
              root: { variant: 'plain', color: 'neutral' },
            }}
            sx={{ color: theme.palette.darkPurple }}
          >
            <MenuIcon fontSize="large" />
          </MenuButton>
          <Menu>
            <Box p={1} textAlign="center">
              <StyledLink
                color="darkPurple"
                onClick={() =>
                  navigate('/Signup', { state: { from: location.pathname } })
                }
              >
                S&apos;inscrire
              </StyledLink>
            </Box>

            <ListDivider />
            <Box p={1}>
              <StyledButton
                color="darkPurple"
                onClick={() =>
                  navigate('/Login', { state: { from: location.pathname } })
                }
              >
                Se connecter
              </StyledButton>
            </Box>
          </Menu>
        </Dropdown>
      </Box>
    </StyledHeader>
  );
}

HomePageHeader.propTypes = {};

export default HomePageHeader;
