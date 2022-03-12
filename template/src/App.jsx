import React from 'react';
import { Routes, Route } from 'react-router-dom';
import User from './pages/users/User';
import Auth from './pages/auth/Auth';
import Home from './components/layout/Home';
import Dashboard from './components/layout/Dashboard';
import NotFound from './components/layout/NotFound';
import ProtectedRoute from './protectedRoute';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<Home />} />
            <Route path="users" element={<User />} />
          </Route>
        </Route>
        <Route path="/auth" element={<Auth />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
