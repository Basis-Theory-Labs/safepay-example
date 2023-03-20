import { alpha, createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00D2EF',
      contrastText: alpha('#000', 0.87),
    },
    background: {
      default: '#0D0A2C',
    },
    text: {
      primary: '#EBEDFF',
      secondary: '#E2E6FFB2',
    },
  },
  typography: {
    fontFamily: "'Inter'",
    h1: {
      fontFamily: "'Poppins'",
      fontSize: '17px',
    },
    h2: {
      fontFamily: "'Outfit'",
      fontSize: '16px',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          textTransform: 'none',
          fontWeight: '600',
        },
      },
    },
  },
});
