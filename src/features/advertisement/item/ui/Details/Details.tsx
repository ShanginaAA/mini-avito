import {
  Advertisement,
  AutoAdvertisement,
  Category,
  RealEstateAdvertisement,
  ServiceAdvertisement,
} from '@entities/advertisements';
import { CButton } from '@shared/ui/buttons';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { AutoDetails, RealEstateDetails, ServiceDetails } from './SpecificDetails';
import { Box, Divider, Grid, Typography } from '@mui/material';

type DetailsProps = {
  advertisement: Advertisement;
};

export const Details: FC<DetailsProps> = ({ advertisement }) => {
  const navigate = useNavigate();

  const renderSpecificDetails = () => {
    switch (advertisement.type as Category) {
      case 'Недвижимость':
        const realEstate = advertisement as RealEstateAdvertisement;
        return <RealEstateDetails realEstate={realEstate} />;
      case 'Авто':
        const auto = advertisement as AutoAdvertisement;
        return <AutoDetails auto={auto} />;
      case 'Услуги':
        const service = advertisement as ServiceAdvertisement;
        return <ServiceDetails service={service} />;
      default:
        break;
    }
  };

  const handleEditAdvertisement = () => {
    navigate(`/form/${advertisement.id}`);
  };
  return (
    <Grid container spacing={4} sx={{ flexGrow: 1 }}>
      <Grid size={{ xs: 12, md: 6 }}>
        <Box
          width={'100%'}
          component="img"
          src={advertisement.image ? advertisement.image : '/images/placeholder-images.png'}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {advertisement.name}
        </Typography>

        <Grid sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
          <Typography variant="body2" color="textSecondary">
            {advertisement.location}
          </Typography>
        </Grid>
        <Divider sx={{ mb: 3 }} />
        {renderSpecificDetails()}
      </Grid>
    </Grid>
  );

  // <CButton variant="contained" onClick={handleEditAdvertisement} sx={{ width: 250 }}>
  //   Редактировать
  // </CButton>
};
