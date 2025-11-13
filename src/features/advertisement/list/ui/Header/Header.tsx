import { Box, Button, Typography } from '@mui/material';
import { CButton } from '@shared/ui/buttons';
import React from 'react';

export const Header = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Список объявлений
      </Typography>
      <CButton variant="contained">Разместить объявление</CButton>
    </Box>
  );
};
