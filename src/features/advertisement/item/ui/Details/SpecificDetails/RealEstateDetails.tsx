import { RealEstateAdvertisement } from '@entities/advertisements';
import { Grid, Typography } from '@mui/material';
import { FC } from 'react';

interface RealEstateDetailsProps {
  realEstate: RealEstateAdvertisement;
}

export const RealEstateDetails: FC<RealEstateDetailsProps> = ({ realEstate }) => {
  return (
    <Grid container spacing={1}>
      <Grid size={{ xs: 12, md: 6 }}>
        <Typography component="span" color="textSecondary">
          Тип недвижимости:{' '}
        </Typography>
        <Typography component="span">{realEstate.propertyType}</Typography>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Typography component="span" color="textSecondary">
          Площадь:{' '}
        </Typography>
        <Typography component="span">{realEstate.area} м²</Typography>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Typography component="span" color="textSecondary">
          Количество комнат:{' '}
        </Typography>
        <Typography component="span">{realEstate.rooms} ком.</Typography>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Typography component="span" color="textSecondary">
          Цена:{' '}
        </Typography>
        <Typography component="span">{realEstate.price.toLocaleString()} ₽</Typography>
      </Grid>
    </Grid>
  );
};
