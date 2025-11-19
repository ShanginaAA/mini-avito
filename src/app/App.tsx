import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { AppRouter } from '@app/providers/routers';
import { store } from '@app/providers/store';
import { createTheme, ThemeProvider } from '@mui/material';

export const theme = createTheme({
  typography: {
    fontFamily: ['PT Sans', 'Roboto', 'sans-serif'].join(','),
    h2: {
      fontWeight: 700,
      letterSpacing: 0.4,
    },
    h4: {
      fontWeight: 700,
      letterSpacing: 0.4,
    },
    h6: {
      fontWeight: 700,
      letterSpacing: 0.4,
    },
    body1: {
      fontWeight: 400,
      letterSpacing: 0.4,
    },
    body2: {
      fontWeight: 400,
      letterSpacing: 0.4,
    },
  },
  palette: {
    primary: {
      dark: '#0e0e0e99',
      light: '#e4e4e4',
      main: '#1C252E',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#7494C2',
      main: '#3e5b85',
      dark: '#142F56',
      contrastText: '#ffffff',
    },
    error: {
      light: 'lightred',
      main: '#cf222e',
      dark: '#bb0a1e',
      contrastText: '#ffffff',
    },
    success: {
      main: '#2aa78e',
      dark: '#009688',
      contrastText: '#ffffff',
    },
  },
});

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <AppRouter />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};
