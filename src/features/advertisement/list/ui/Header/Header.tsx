import { Box, Button, Typography } from '@mui/material';
import { CButton } from '@shared/ui/buttons';
import { MouseEvent, FC } from 'react';

export const Header: FC = () => {
  const handlePlaceAd = (event: MouseEvent<HTMLButtonElement>) => {};
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
      <CButton variant="contained" onClick={handlePlaceAd}>
        Разместить объявление
      </CButton>
    </Box>
  );
};
