import { Box, FormControl, Grid, InputLabel, Select, Typography } from '@mui/material';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { AdvertisementFormValues } from '../../hooks/formValues';

export const BasicInfoStep = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<AdvertisementFormValues>();
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" gutterBottom>
        {isEditMode ? 'Редактирование объявления' : 'Основная информация'}
      </Typography>
      <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>
        Заполните основную информацию о вашем объявлении
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12 }}>
          <CustomTextField
            label="Название объявления"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            placeholder="Введите краткое и понятное название"
            required
            fullWidth
          />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <CustomTextField
            label="Описание"
            value={formData.description}
            onChange={(e) => handleChange('description', e.target.value)}
            placeholder="Подробно опишите ваше предложение..."
            multiline
            rows={4}
            required
            fullWidth
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6 }}>
          <CustomTextField
            label="Локация"
            value={formData.location}
            onChange={(e) => handleChange('location', e.target.value)}
            placeholder="Город или адрес"
            required
            fullWidth
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6 }}>
          <FormControl fullWidth required>
            <InputLabel>Категория</InputLabel>
            <Select
              value={formData.type}
              label="Категория"
              onChange={(e) => handleChange('type', e.target.value)}
            >
              {categoryOptions
                .filter((option) => option.value !== '') // Убираем "Все категории"
                .map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
};
