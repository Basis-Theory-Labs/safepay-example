import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Checkout } from './Checkout';
import { Container } from './Container';
import { theme } from './theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Container>
      <Checkout />
    </Container>
  </ThemeProvider>
);

export default App;
export { App };
