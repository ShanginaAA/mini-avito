import { ServiceAdvertisement } from '@entities/advertisements';
import { Grid, Typography } from '@mui/material';
import React, { FC } from 'react';

interface ServiceDetailsProps {
  service: ServiceAdvertisement;
}

export const ServiceDetails: FC<ServiceDetailsProps> = ({ service }) => {
  return (
    <Grid container spacing={1}>
      <Grid size={{ xs: 12, md: 6 }}>
        <Typography component="span" color="textSecondary">
          Тип услуги:{' '}
        </Typography>
        <Typography component="span">{service.serviceType}</Typography>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Typography component="span" color="textSecondary">
          Опыт работы:{' '}
        </Typography>
        <Typography component="span">{service.experience} лет</Typography>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Typography component="span" color="textSecondary">
          График работы:{' '}
        </Typography>
        <Typography component="span">{service.workSchedule || 'Не указан'}</Typography>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Typography component="span" color="textSecondary">
          Стоимость:{' '}
        </Typography>
        <Typography component="span">{service.cost.toLocaleString()} ₽</Typography>
      </Grid>
    </Grid>
  );
};
