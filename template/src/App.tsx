import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import Public from './pages/public';
import SignIn from './pages/signIn';
import Dashboard from './pages/dashboard';
import ProtectedRoute from './features/auth/protectedRoute';
import Posts from './features/post/post';
import Home from './pages/home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        {/* public routes */}
        <Route index element={<Public />} />
        <Route path="login" element={<SignIn />} />

        {/* protected routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<Home />} />
            <Route path="posts" element={<Posts />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
