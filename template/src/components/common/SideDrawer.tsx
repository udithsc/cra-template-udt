import React from 'react';
import { Box, Drawer, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface SideDrawerProps {
  title: string;
  open: boolean;
  setOpen: (status: boolean) => void;
  children: React.ReactNode;
}

function SideDrawer({ title, children, open, setOpen }: SideDrawerProps) {
  const closeDrawer = () => setOpen(false);

  return (
    <Drawer anchor="right" open={open} onClose={closeDrawer}>
      <Box
        bgcolor="primary.main"
        color="#fff"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding={1}
      >
        <Typography>{title}</Typography>
        <IconButton onClick={closeDrawer} id="drawerCloseBtn">
          <CloseIcon sx={{ color: '#fff' }} />
        </IconButton>
      </Box>
      {children}
    </Drawer>
  );
}

export default SideDrawer;
