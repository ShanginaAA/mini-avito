import { Box, Typography } from '@mui/material';
import { CButton } from '@shared/ui/buttons';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

export const Header: FC = () => {
  const navigate = useNavigate();
  const handlePlaceAd = () => {
    navigate(`/form`);
  };
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
