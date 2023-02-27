import React from 'react';
import {
  BasisTheoryProvider,
  useBasisTheory,
} from '@basis-theory/basis-theory-react';
import { alpha, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { Checkout } from './Checkout';
import { Container } from './Container';

const theme = createTheme({
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

const App = () => {
  const { bt } = useBasisTheory('test_123456789', { elements: true });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BasisTheoryProvider bt={bt}>
        <Container>
          <Checkout />
        </Container>
      </BasisTheoryProvider>
    </ThemeProvider>
  );
};

export default App;
export { App };
