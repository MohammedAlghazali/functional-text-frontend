import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Routes, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import Register from './views/register';
import RegistrationInfo from './views/registration-info';
import { HOME_PAGE_URL, REGISTRATION_INFO_URL } from './constants/url.constants';

import 'react-toastify/dist/ReactToastify.css';

import './assets/css/App.css';
import theme from './theme';

// TODO: add the routes in an array
const App = () => (
  <ThemeProvider theme={theme}>
    <div className="App">
      <Routes>
        <Route path={HOME_PAGE_URL} element={<Register />} />
        <Route path={REGISTRATION_INFO_URL} element={<RegistrationInfo />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  </ThemeProvider>
);

export default App;
