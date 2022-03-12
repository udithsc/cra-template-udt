import React from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Controls from '../controls/Controls';

function NotFound() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        width: '100vw',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Box>
        <Box sx={{ p: 1, justifyContent: 'center' }}>
          <Typography variant="h1" component="h1" gutterBottom>
            404
          </Typography>
          <Typography variant="h4" component="h4" gutterBottom>
            Page Not Found
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            The Requested Page was not found
          </Typography>
        </Box>
        <Controls.Button text="Back to Home" onClick={() => navigate('/')} />
      </Box>
    </Box>
  );
}

export default NotFound;
