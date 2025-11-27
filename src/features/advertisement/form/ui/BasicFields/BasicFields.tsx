import { Grid, MenuItem } from '@mui/material';
import { CTextField } from '@shared/ui/inputs';

import { Controller, useFormContext } from 'react-hook-form';
import { AdvertisementFormValues } from '../../hooks/formValues';

const CATEGORY_OPTIONS: AdvertisementFormValues['type'][] = ['Недвижимость', 'Авто', 'Услуги'];

export const BasicFields = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<AdvertisementFormValues>();
  console.log(errors);
  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12 }}>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <CTextField
              {...field}
              label="Название объявления"
              placeholder="Введите краткое и понятное название"
              required
              fullWidth
              error={Boolean(errors.name)}
              helperText={errors.name?.message}
            />
          )}
        />
      </Grid>

      <Grid size={{ xs: 12 }}>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <CTextField
              {...field}
              label="Описание"
              placeholder="Подробно опишите ваше предложение..."
              required
              fullWidth
              multiline
              minRows={4}
              error={Boolean(errors.description)}
              helperText={errors.description?.message}
            />
          )}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <Controller
          name="location"
          control={control}
          render={({ field }) => (
            <CTextField
              {...field}
              label="Локация"
              placeholder="Город или адрес"
              required
              fullWidth
              error={Boolean(errors.location)}
              helperText={errors.location?.message}
            />
          )}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <Controller
          name="type"
          control={control}
          render={({ field }) => (
            <CTextField
              {...field}
              select
              label="Категория"
              placeholder="Выберите категорию"
              required
              fullWidth
              error={Boolean(errors.type)}
              helperText={errors.type?.message}
            >
              {CATEGORY_OPTIONS.map((option: any) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </CTextField>
          )}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <Controller
          name="image"
          control={control}
          render={({ field }) => (
            <CTextField
              {...field}
              label="Ссылка на изображение"
              placeholder="https://example.com/image.jpg"
              fullWidth
              helperText={
                errors.image?.message ??
                'Можно оставить пустым — в списке появится изображение-заглушка.'
              }
              error={Boolean(errors.image)}
            />
          )}
        />
      </Grid>
    </Grid>
  );
};
