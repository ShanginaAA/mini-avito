import { Box, Button, Typography } from '@mui/material';
import React from 'react';

export const Header = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Список объявлений
      </Typography>
      <Button variant="contained" sx={{ minWidth: 200 }}>
        Разместить объявление
      </Button>
    </Box>
  );
};
