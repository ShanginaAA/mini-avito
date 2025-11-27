import { AdvertisementFormValues } from '@features/advertisement/form/hooks/formValues';
import { AutoFields, RealEstateFields, ServiceFields } from '@features/advertisement/form';
import { Box, Grid, Typography } from '@mui/material';

import { useFormContext } from 'react-hook-form';

export const CategoryStep = () => {
  const { watch } = useFormContext<AdvertisementFormValues>();
  const currentType = watch('type');

  const renderFieldsByType = () => {
    if (currentType === 'Недвижимость') {
      return <RealEstateFields />;
    }
    if (currentType === 'Авто') {
      return <AutoFields />;
    }
    if (currentType === 'Услуги') {
      return <ServiceFields />;
    }
    return null;
  };

  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" fontWeight={700} gutterBottom>
        Детали предложения
      </Typography>
      <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>
        Уточните характеристики, релевантные выбранной категории — так объявление быстрее найдёт
        отклик.
      </Typography>
      <Grid container spacing={3}>
        {renderFieldsByType()}
      </Grid>
    </Box>
  );
};
