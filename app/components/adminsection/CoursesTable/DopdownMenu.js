import React from 'react';
import Dropdown from '@mui/joy/Dropdown';
import IconButton from '@mui/joy/IconButton';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

const DropdownMenu = ({ ...props }) => (
  <Dropdown>
    <MenuButton
      slots={{ root: IconButton }}
      slotProps={{ root: { variant: 'plain', color: 'neutral', size: 'sm' } }}
    >
      <MoreHorizRoundedIcon />
    </MenuButton>
    <Menu size="sm" sx={{ minWidth: 140 }}>
      {/* <MenuItem>Modifier</MenuItem>
      <Divider /> */}
      <MenuItem color="danger" onClick={props.onDelete}>
        Supprimer
      </MenuItem>
    </Menu>
  </Dropdown>
);

DropdownMenu.propTypes = {
  onDelete: PropTypes.func,
};

export default DropdownMenu;
