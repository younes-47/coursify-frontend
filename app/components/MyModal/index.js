/**
 *
 * MyModal
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import InfoIcon from '@mui/icons-material/Info';
import Button from '@mui/joy/Button';
import DialogActions from '@mui/joy/DialogActions';
import DialogContent from '@mui/joy/DialogContent';
import DialogTitle from '@mui/joy/DialogTitle';
import Divider from '@mui/joy/Divider';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';

function MyModal({ open, setOpen, message, color, ...props }) {
  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <ModalDialog variant="outlined" role="alertdialog">
        <DialogTitle>
          {color === 'danger' ? <WarningRoundedIcon /> : <InfoIcon />}
          Confirmation
        </DialogTitle>
        <Divider />
        <DialogContent>{message}</DialogContent>
        <DialogActions>
          <Button variant="solid" color={color} onClick={props.onConfirm}>
            Confirmer
          </Button>
          <Button
            variant="plain"
            color="neutral"
            onClick={() => setOpen(false)}
          >
            Annuler
          </Button>
        </DialogActions>
      </ModalDialog>
    </Modal>
  );
}

MyModal.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  message: PropTypes.string,
  color: PropTypes.string,
  onConfirm: PropTypes.func,
};

export default MyModal;
