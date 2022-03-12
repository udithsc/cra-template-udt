/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Button as MuiButton, Tooltip } from '@mui/material';

export default function Button({ text, size, variant, onClick, textColor, tooltip, ...other }) {
  return (
    <Tooltip title={tooltip} disableFocusListener={!tooltip} disableHoverListener={!tooltip}>
      <MuiButton
        sx={{
          m: 1,
          '&.MuiButton-root': {
            color: textColor
          }
        }}
        variant={variant}
        size={size}
        onClick={onClick}
        {...other}
      >
        {text}
      </MuiButton>
    </Tooltip>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.string,
  color: PropTypes.string,
  textColor: PropTypes.string,
  variant: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  tooltip: PropTypes.string
};

Button.defaultProps = {
  size: 'small',
  variant: 'contained',
  color: 'primary',
  textColor: 'white',
  tooltip: ''
};
