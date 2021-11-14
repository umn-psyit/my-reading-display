import {createTheme} from '@material-ui/core';

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#7a0019',
    },
    secondary: {
      main: '#ffcc33',
    },
  },
  typography: {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: 18,
    h2: {
      fontSize: 50,
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#7a0019',
    },
    secondary: {
      main: '#ffcc33',
    },
    background: {
      paper: '#181818',
      default: '#181818',
    },
  },
  typography: {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: 18,
    h2: {
      fontSize: 50,
    },
  },
  overrides: {
    MuiLink: {
      root: {
        color: 'inherit',
        textDecoration: 'underline'
      },
      underlineHover: {
        textDecoration: 'underline'
      }
    }
  }
});
