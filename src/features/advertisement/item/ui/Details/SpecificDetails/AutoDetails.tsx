import { AutoAdvertisement } from '@entities/advertisements';
import { Grid, Typography } from '@mui/material';
import React, { FC } from 'react';

interface AutoDetailsProps {
  auto: AutoAdvertisement;
}

export const AutoDetails: FC<AutoDetailsProps> = ({ auto }) => {
  return (
    <Grid container spacing={1}>
      <Grid size={{ xs: 12, md: 6 }}>
        <Typography component="span" color="textSecondary">
          Марка:{' '}
        </Typography>
        <Typography component="span">{auto.brand}</Typography>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Typography component="span" color="textSecondary">
          Модель:{' '}
        </Typography>
        <Typography component="span">{auto.model}</Typography>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Typography component="span" color="textSecondary">
          Год выпуска:{' '}
        </Typography>
        <Typography component="span">{auto.year}</Typography>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Typography component="span" color="textSecondary">
          Пробег:{' '}
        </Typography>
        <Typography component="span">
          {auto.mileage ? `${auto.mileage.toLocaleString()} км` : 'Не указан'}
        </Typography>
      </Grid>
    </Grid>
  );
};
