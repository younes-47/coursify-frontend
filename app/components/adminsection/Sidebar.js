import * as React from 'react';
import GlobalStyles from '@mui/joy/GlobalStyles';
import Box from '@mui/joy/Box';
import Divider from '@mui/joy/Divider';
import IconButton from '@mui/joy/IconButton';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton, { listItemButtonClasses } from '@mui/joy/ListItemButton';
import ListItemContent from '@mui/joy/ListItemContent';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';
import SpeedSharpIcon from '@mui/icons-material/SpeedSharp';
import AutoAwesomeSharpIcon from '@mui/icons-material/AutoAwesomeSharp';
import LibraryBooksSharpIcon from '@mui/icons-material/LibraryBooksSharp';
import { useLocation, useNavigate } from 'react-router-dom';
import { Chip } from '@mui/joy';
import { closeSidebar } from './utils';
import { StyledLogo } from '../Styled/StyledLogo';
import appLogo from '../../images/app-logo.svg';
import useAuth from '../../utils/custom/hooks/useAuth';
import useLogout from '../../utils/custom/hooks/useLogout';
import { CenteredContainer } from '../Styled/CenteredContainer';

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { userInfo } = useAuth();
  const logout = useLogout();
  return (
    <Sheet
      className="Sidebar"
      sx={{
        position: { xs: 'fixed', md: 'sticky' },
        transform: {
          xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))',
          md: 'none',
        },
        transition: 'transform 0.4s, width 0.4s',
        zIndex: 10000,
        height: '100dvh',
        width: 'var(--Sidebar-width)',
        top: 0,
        p: 2,
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        borderRight: '1px solid',
        borderColor: 'divider',
        backgroundImage:
          'linear-gradient(to left bottom, #e7efe9, #dbead2, #dce2b6, #e7d79a, #f9c784);',
      }}
    >
      <GlobalStyles
        styles={(theme) => ({
          ':root': {
            '--Sidebar-width': '230px',
            [theme.breakpoints.up('lg')]: {
              '--Sidebar-width': '240px',
            },
          },
        })}
      />
      <Box
        className="Sidebar-overlay"
        sx={{
          position: 'fixed',
          zIndex: 9998,
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          opacity: 'var(--SideNavigation-slideIn)',
          backgroundColor: 'var(--joy-palette-background-backdrop)',
          transition: 'opacity 0.4s',
          transform: {
            xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))',
            lg: 'translateX(-100%)',
          },
        }}
        onClick={() => closeSidebar()}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <StyledLogo
          src={appLogo}
          onClick={() => navigate('/admin/dashboard')}
        />
      </Box>

      <Box
        sx={{
          minHeight: 0,
          overflow: 'hidden auto',
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          [`& .${listItemButtonClasses.root}`]: {
            gap: 1.5,
          },
        }}
      >
        <List
          size="sm"
          sx={{
            gap: 1,
            '--List-nestedInsetStart': '30px',
            '--ListItem-radius': (theme) => theme.vars.radius.sm,
          }}
        >
          <ListItem>
            <ListItemButton
              selected={location.pathname.toLowerCase() === '/admin/dashboard'}
              onClick={() =>
                navigate('/admin/dashboard', {
                  state: { from: location.pathname },
                })
              }
            >
              <DashboardRoundedIcon />
              <ListItemContent>
                <Typography level="title-sm">Dashboard</Typography>
              </ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton
              selected={location.pathname.toLowerCase() === '/admin/courses'}
              onClick={() =>
                navigate('/admin/courses', {
                  state: { from: location.pathname },
                })
              }
            >
              <LibraryBooksSharpIcon />
              <ListItemContent>
                <Typography level="title-sm">Courses</Typography>
              </ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton
              selected={location.pathname.toLowerCase() === '/admin/evaluation'}
              onClick={() =>
                navigate('/admin/evaluations', {
                  state: { from: location.pathname },
                })
              }
            >
              <SpeedSharpIcon />
              <ListItemContent>
                <Typography level="title-sm">Evaluations</Typography>
              </ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton
              selected={location.pathname.toLowerCase() === '/admin/quiz'}
              onClick={() =>
                navigate('/admin/quiz', { state: { from: location.pathname } })
              }
            >
              <AutoAwesomeSharpIcon />
              <ListItemContent>
                <Typography level="title-sm">Quiz</Typography>
              </ListItemContent>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton
              selected={location.pathname.toLowerCase() === '/admin/settings'}
              onClick={() =>
                navigate('/admin/settings', {
                  state: { from: location.pathname },
                })
              }
            >
              <SettingsSharpIcon />
              <ListItemContent>
                <Typography level="title-sm">Paramètres</Typography>
              </ListItemContent>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
      <Divider />
      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
        <Box sx={{ minWidth: 0, flex: 1 }}>
          <Typography level="title-sm">
            {userInfo?.firstName} {userInfo?.lastName}
          </Typography>
          <Typography level="body-xs">{userInfo?.email}</Typography>
        </Box>
        <IconButton
          size="sm"
          variant="plain"
          color="neutral"
          onClick={() => logout()}
        >
          <LogoutRoundedIcon />
        </IconButton>
      </Box>
    </Sheet>
  );
}
