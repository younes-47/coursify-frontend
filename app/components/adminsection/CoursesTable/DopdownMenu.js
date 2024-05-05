import React from 'react';
import {
  Dropdown,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  Divider,
} from '@mui/joy';
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
