import React from 'react';
import axios from 'axios';
import jwt from 'jwt-decode';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectLoginStatus, loggedIn } from './store/auth';

function ProtectedRoute() {
  // const auth = useSelector(selectLoginStatus);
  const auth = true;
  const dispatch = useDispatch();

  if (!auth) {
    const accessToken = sessionStorage.getItem('token');

    if (!accessToken) {
      return <Navigate to="/auth" />;
    }

    try {
      const decoded = jwt(accessToken);
      if (decoded.aud !== process.env.REACT_APP_CLIENT_ID) {
        throw new Error('decode failed');
      }
    } catch (error) {
      return <Navigate to="/auth" />;
    }

    dispatch({
      type: loggedIn.type,
      payload: { accessToken }
    });
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    return <Outlet />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
