import { ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  // allow configuration using `createTheme`
  interface CustomThemeOptions extends ThemeOptions {
    palette: {
      primary: {
        main: string;
      };
      grey: {
        100: string;
        900: string;
      }
      error: {
        main: string;
      };
    };
    typography: {
      fontFamily: string;
    }
  }
  // eslint-disable-next-line no-unused-vars
  export function createTheme(options?: CustomThemeOptions);
}
