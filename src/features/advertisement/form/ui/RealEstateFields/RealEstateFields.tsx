import { REALTY_TYPES } from '@entities/advertisements';
import { Grid, MenuItem } from '@mui/material';
import { CTextField } from '@shared/ui/inputs';
import { Fragment } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { AdvertisementFormValues } from '../../hooks/formValues';
import { numberParser } from '../../lib/parsers';

export const RealEstateFields = () => {
  const {
    control,
    formState: { errors, touchedFields },
  } = useFormContext<AdvertisementFormValues>();

  return (
    <Fragment>
      <Grid size={{ xs: 12, md: 6 }}>
        <Controller
          name="propertyType"
          control={control}
          render={({ field }) => (
            <CTextField
              {...field}
              select
              label="Тип недвижимости"
              placeholder="Выберите тип"
              required
              fullWidth
              error={touchedFields.propertyType && Boolean(errors.propertyType)}
              helperText={touchedFields.propertyType && errors.propertyType?.message}
            >
              {REALTY_TYPES.map((option) => (
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
          name="area"
          control={control}
          render={({ field }) => (
            <CTextField
              {...field}
              label="Площадь, м²"
              type="number"
              placeholder="Например, 72"
              required
              fullWidth
              onChange={(event) => field.onChange(numberParser(event.target.value))}
              value={field.value ?? ''}
              error={touchedFields.area && Boolean(errors.area)}
              helperText={touchedFields.area && errors.area?.message}
            />
          )}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Controller
          name="rooms"
          control={control}
          render={({ field }) => (
            <CTextField
              {...field}
              type="number"
              label="Количество комнат"
              placeholder="Например, 3"
              required
              fullWidth
              value={field.value ?? ''}
              onChange={(event) => field.onChange(numberParser(event.target.value))}
              error={touchedFields.rooms && Boolean(errors.rooms)}
              helperText={touchedFields.rooms && errors.rooms?.message}
            />
          )}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Controller
          name="price"
          control={control}
          render={({ field }) => (
            <CTextField
              {...field}
              type="number"
              label="Стоимость, ₽"
              placeholder="Например, 8 500 000"
              required
              fullWidth
              value={field.value ?? ''}
              onChange={(event) => field.onChange(numberParser(event.target.value))}
              error={touchedFields.price && Boolean(errors.price)}
              helperText={touchedFields.price && errors.price?.message}
            />
          )}
        />
      </Grid>
    </Fragment>
  );
};
