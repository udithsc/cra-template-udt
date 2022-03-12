import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Grid, Box, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import LoadingButton from '@mui/lab/LoadingButton';
import Joi from 'joi';
import logo from '../../resources/images/logo.png';
import Notification from '../../components/ui/Notification';
import Copyright from '../../components/layout/Copyright';

import {
  selectNotification,
  closeNotification,
  showNotification,
  loggedIn,
  selectAccessToken
} from '../../store/auth';

export default function Auth() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const notify = useSelector(selectNotification);
  const token = useSelector(selectAccessToken);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getMainButtonText = () => {
    if (isSignUp) return 'Sign Up';
    if (isForgotPassword) return 'Reset Password';
    return 'Sign In';
  };

  const getSubButtonText = () => {
    if (isSignUp) return 'Already have an account? Sign in';
    if (isForgotPassword) return 'Back to Sign in';
    return `Don't have an account? Sign Up`;
  };

  const getTitleText = () => {
    if (isSignUp) return 'Sign Up';
    if (isForgotPassword) return 'Forgot Password';
    return `Sign In`;
  };

  const switchSignInMode = () => {
    setIsSignUp((state) => !state);
    if (isForgotPassword) setIsSignUp(false);
    setIsForgotPassword(false);
  };

  const switchForgotPasswordMode = () => {
    setIsForgotPassword((state) => !state);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const schema = Joi.object({
      email: Joi.string()
        .required()
        .label('Email')
        .email({ tlds: { allow: false } }),
      password: Joi.string().required().label('Password')
    });

    const data = new FormData(event.currentTarget);
    const credentials = {
      email: data.get('email'),
      password: data.get('password')
    };

    const errors = schema.validate(credentials);
    if (errors.error) {
      setIsLoading(false);
      return dispatch({
        type: showNotification.type,
        payload: { message: errors.error.message, type: 'error' }
      });
    }

    // dispatch(loggedIn(credentials));
    navigate('/');
  };

  return (
    <Box
      component="div"
      sx={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: grey[200],
        flexDirection: 'column'
      }}
    >
      <Box
        container
        sx={{
          maxWidth: 450,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          bgcolor: 'white',
          p: 2,
          pt: 5,
          mb: 3
        }}
      >
        <img src={logo} alt="Logo" width={100} />
        <Typography component="h1" variant="h5">
          {getTitleText()}
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2} sx={{ display: 'inline-flex' }}>
            {isSignUp && (
              <>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="username"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    type="text"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="mobile"
                    label="Mobile"
                    name="mobile"
                    type="tel"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    type="text"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    type="text"
                  />
                </Grid>
              </>
            )}

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                type="email"
              />
            </Grid>
            {!isForgotPassword && (
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            )}
          </Grid>
          <LoadingButton
            loading={isLoading}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {getMainButtonText()}
          </LoadingButton>
          <Grid container justifyContent="space-between">
            {!isSignUp && !isForgotPassword && (
              <Grid item>
                <Button size="small" onClick={switchForgotPasswordMode}>
                  Forgot Password?
                </Button>
              </Grid>
            )}
            <Grid item>
              <Button size="small" onClick={switchSignInMode}>
                {getSubButtonText()}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright />
      {notify.isOpen && <Notification notify={notify} closeNotification={closeNotification} />}
    </Box>
  );
}
