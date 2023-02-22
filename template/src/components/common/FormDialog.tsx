import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface FormDialogProps {
  title: string;
  intro?: string;
  open: boolean;
  setOpen: (status: boolean) => void;
  children: React.ReactNode;
}

export default function FormDialog({
  title,
  intro,
  children,
  open,
  setOpen,
}: FormDialogProps) {
  const handleClose = () => setOpen(false);

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText marginBottom={2}>{intro}</DialogContentText>
        {children}
      </DialogContent>
    </Dialog>
  );
}
