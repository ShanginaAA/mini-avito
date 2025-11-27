import React, { Fragment } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { AdvertisementFormValues } from '../../hooks/formValues';
import { Grid, MenuItem } from '@mui/material';
import { CTextField } from '@shared/ui/inputs';
import { SERVICE_TYPES } from '@entities/advertisements';
import { numberParser } from '../../lib/parsers';

export const ServiceFields = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<AdvertisementFormValues>();

  return (
    <Fragment>
      <Grid size={{ xs: 12, md: 6 }}>
        <Controller
          name="serviceType"
          control={control}
          render={({ field }) => (
            <CTextField
              {...field}
              select
              label="Тип услуги"
              placeholder="Выберите направление"
              required
              fullWidth
              error={Boolean(errors.serviceType)}
              helperText={errors.serviceType?.message}
            >
              {SERVICE_TYPES.map((service) => (
                <MenuItem key={service} value={service}>
                  {service}
                </MenuItem>
              ))}
            </CTextField>
          )}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Controller
          name="experience"
          control={control}
          render={({ field }) => (
            <CTextField
              {...field}
              type="number"
              label="Опыт работы, лет"
              placeholder="Например, 5"
              required
              fullWidth
              value={field.value ?? ''}
              onChange={(event) => field.onChange(numberParser(event.target.value))}
              error={Boolean(errors.experience)}
              helperText={errors.experience?.message}
            />
          )}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Controller
          name="cost"
          control={control}
          render={({ field }) => (
            <CTextField
              {...field}
              type="number"
              label="Стоимость, ₽"
              placeholder="Например, 5 000"
              required
              fullWidth
              value={field.value ?? ''}
              onChange={(event) => field.onChange(numberParser(event.target.value))}
              error={Boolean(errors.cost)}
              helperText={errors.cost?.message}
            />
          )}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Controller
          name="workSchedule"
          control={control}
          render={({ field }) => (
            <CTextField
              {...field}
              label="График работы"
              placeholder="Например, Пн-Пт, 9:00–18:00"
              fullWidth
              error={Boolean(errors.workSchedule)}
              helperText={errors.workSchedule?.message}
            />
          )}
        />
      </Grid>
    </Fragment>
  );
};
