/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';

export default function Input({ name, label, value, error, onChange, ...other }) {
  return (
    <TextField
      sx={{
        m: 1,
        minWidth: 100,
        flex: 1,
        '& .MuiInputBase-root': {
          backgroundColor: 'white'
        }
      }}
      variant="outlined"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      size="small"
      {...other}
      {...(error && { error: true, helperText: error })}
    />
  );
}

// TODO:add value string or number
Input.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  error: PropTypes.string
};

Input.defaultProps = {
  name: '',
  label: '',
  value: '',
  error: '',
  onChange: () => {}
};
