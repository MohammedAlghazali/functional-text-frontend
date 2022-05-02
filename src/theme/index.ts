import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#02E0B1',
    },
    grey: {
      100: '#DFDFDF',
      400: 'rgba(0, 0, 0, 0.54)',
      900: '#383838',
    },
    error: {
      main: '#F44336',
    },
  },
  typography: {
    fontFamily: 'RawLine-Regular',
  },
});

export default theme;
