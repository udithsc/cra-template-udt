import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

type AlertDialogProps = {
  open: boolean;
  title: string;
  message: string;
  setOpen: (status: boolean) => void;
  onHandleSuccess: () => void;
};

function AlertDialog({
  open,
  title,
  message,
  setOpen,
  onHandleSuccess,
}: AlertDialogProps) {
  const handleClose = () => setOpen(false);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} autoFocus>
          No
        </Button>
        <Button onClick={onHandleSuccess} variant="text">
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AlertDialog;
