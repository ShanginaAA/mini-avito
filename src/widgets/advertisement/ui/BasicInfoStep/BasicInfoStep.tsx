import { BasicFields } from '@features/advertisement/form';
import { Box, Typography } from '@mui/material';

export const BasicInfoStep = () => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" fontWeight={700} gutterBottom>
        Основная информация
      </Typography>
      <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>
        Расскажите кратко о предложении и выберите категорию — это позволит перейти к детальным
        характеристикам.
      </Typography>
      <BasicFields />
    </Box>
  );
};
