import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { ToastContainer } from 'react-toastify';
import { store } from './store/store';
import App from './App';
import theme from './styles/theme';
import './index.scss';
import 'react-toastify/dist/ReactToastify.css';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
);
