import * as React from 'react';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import Stack from '@mui/joy/Stack';
import Avatar from '@mui/joy/Avatar';
import Dropdown from '@mui/joy/Dropdown';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import ListDivider from '@mui/joy/ListDivider';
import Drawer from '@mui/joy/Drawer';
import ModalClose from '@mui/joy/ModalClose';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useLocation, useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import appLogo from '../../images/app-logo.svg';
import { StyledLogo } from '../Styled/StyledLogo';
import useLogout from '../../utils/custom/hooks/useLogout';
import useAuth from '../../utils/custom/hooks/useAuth';
import { avatarsPaths } from '../../containers/UserProfilePage/Avatars';

export default function UserSectionHeader() {
  const [open, setOpen] = React.useState(false);
  const logout = useLogout();
  const navigate = useNavigate();
  const location = useLocation();
  const { userInfo } = useAuth();
  return (
    <Box
      sx={{
        display: 'flex',
        flexGrow: 1,
        justifyContent: 'space-between',
      }}
    >
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
        sx={{ display: { xs: 'none', sm: 'flex' } }}
      >
        <StyledLogo src={appLogo} onClick={() => navigate('/home')} />
      </Stack>
      <Box sx={{ display: { xs: 'inline-flex', sm: 'none' } }}>
        <IconButton
          variant="plain"
          color="neutral"
          onClick={() => setOpen(true)}
        >
          <MenuRoundedIcon />
        </IconButton>
        <Drawer
          sx={{ display: { xs: 'inline-flex', sm: 'none' } }}
          open={open}
          onClose={() => setOpen(false)}
        >
          <ModalClose />
          {/* <DialogTitle>Coursify</DialogTitle> */}
          <Box sx={{ px: 1 }}>
            <Navigation />
          </Box>
        </Drawer>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: 1.5,
          alignItems: 'center',
        }}
      >
        <Dropdown>
          <MenuButton
            variant="plain"
            size="sm"
            sx={{
              maxWidth: '50px',
              maxHeight: '50px',
              borderRadius: '9999999px',
            }}
          >
            {userInfo?.avatar && (
              <Avatar
                src={avatarsPaths[userInfo?.avatar]}
                sx={{ maxWidth: '50px', maxHeight: '50px' }}
              />
            )}
          </MenuButton>
          <Menu
            placement="bottom-end"
            size="sm"
            sx={{
              zIndex: '99999',
              p: 1,
              gap: 1,
              '--ListItem-radius': 'var(--joy-radius-sm)',
            }}
          >
            <MenuItem
              onClick={() =>
                navigate('/myprofile', { state: { from: location.pathname } })
              }
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {userInfo?.avatar && (
                  <Avatar
                    src={avatarsPaths[userInfo?.avatar]}
                    sx={{ maxWidth: '50px', maxHeight: '50px' }}
                  />
                )}
                <Box sx={{ ml: 1.5 }}>
                  <Typography level="title-sm" textColor="text.primary">
                    {userInfo?.firstName} {userInfo?.lastName}
                  </Typography>
                  <Typography level="body-xs" textColor="text.tertiary">
                    {userInfo?.email}
                  </Typography>
                </Box>
              </Box>
            </MenuItem>

            <ListDivider />
            <MenuItem onClick={() => logout()}>
              <LogoutRoundedIcon />
              Se déconnecter
            </MenuItem>
          </Menu>
        </Dropdown>
      </Box>
    </Box>
  );
  ù;
}
