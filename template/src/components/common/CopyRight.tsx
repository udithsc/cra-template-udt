import React from 'react';
import { Typography, Link } from '@mui/material';
import configs from '../../project.config.json';

function CopyRight() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href={configs.BRAND_WEBSITE}>
        {configs.BRAND_NAME}
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

export default CopyRight;
