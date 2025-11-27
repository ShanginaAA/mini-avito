import { AUTO_BRANDS } from '@entities/advertisements';
import { Grid, MenuItem } from '@mui/material';
import { CTextField } from '@shared/ui/inputs';
import React, { Fragment } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { numberParser } from '../../lib/parsers';
import { AdvertisementFormValues } from '../../hooks/formValues';

export const AutoFields = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<AdvertisementFormValues>();

  return (
    <Fragment>
      <Grid size={{ xs: 12, md: 6 }}>
        <Controller
          name="brand"
          control={control}
          render={({ field }) => (
            <CTextField
              {...field}
              select
              label="Марка"
              placeholder="Выберите марку"
              required
              fullWidth
              error={Boolean(errors.brand)}
              helperText={errors.brand?.message}
            >
              {AUTO_BRANDS.map((brand) => (
                <MenuItem key={brand} value={brand}>
                  {brand}
                </MenuItem>
              ))}
            </CTextField>
          )}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Controller
          name="model"
          control={control}
          render={({ field }) => (
            <CTextField
              {...field}
              label="Модель"
              placeholder="Например, Camry"
              required
              fullWidth
              error={Boolean(errors.model)}
              helperText={errors.model?.message}
            />
          )}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Controller
          name="year"
          control={control}
          render={({ field }) => (
            <CTextField
              {...field}
              type="number"
              label="Год выпуска"
              placeholder="Например, 2022"
              required
              fullWidth
              value={field.value ?? ''}
              error={Boolean(errors.year)}
              helperText={errors.year?.message}
            />
          )}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Controller
          name="mileage"
          control={control}
          render={({ field }) => (
            <CTextField
              {...field}
              type="number"
              label="Пробег, км"
              placeholder="Например, 25 000"
              fullWidth
              value={field.value ?? ''}
              onChange={(event) => field.onChange(numberParser(event.target.value))}
              error={Boolean(errors.mileage)}
              helperText={errors.mileage?.message}
            />
          )}
        />
      </Grid>
    </Fragment>
  );
};
