import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { AppRouter } from '@app/providers/routers';
import { store } from '@app/providers/store';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: ['PT Sans', 'Roboto', 'sans-serif'].join(','),
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
