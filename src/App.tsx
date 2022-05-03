import React from 'react';
import { ThemeProvider } from '@mui/material/styles';

import { ToastContainer } from 'react-toastify';

import { renderRoutes, routes } from './routes';

import 'react-toastify/dist/ReactToastify.css';
import theme from './theme';
import './assets/css/App.css';

const App = () => (
  <ThemeProvider theme={theme}>
    <div className="App">
      {renderRoutes(routes)}
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
