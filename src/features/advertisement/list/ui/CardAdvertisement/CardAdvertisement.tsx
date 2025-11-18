import {
  Advertisement,
  AutoAdvertisement,
  RealEstateAdvertisement,
  selectAdvertisements,
  ServiceAdvertisement,
} from '@entities/advertisements';
import { Box, Button, Card, CardContent, CardMedia, Chip, Grid, Typography } from '@mui/material';
import { useAppSelector } from '@shared/hooks/useAppSelector';
import { CButton } from '@shared/ui/buttons';
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

type CardProps = {
  advertisement: Advertisement;
};

export const CardAdvertisement: FC<CardProps> = ({ advertisement }) => {
  const navigate = useNavigate();

  const handleOpenAdvertisement = () => {
    navigate(`/item/${advertisement.id}`);
  };

  const renderSpecificFields = () => {
    switch (advertisement.type) {
      case 'Недвижимость':
        const realEstate = advertisement as RealEstateAdvertisement;
        return (
          <Box sx={{ mt: 'auto' }}>
            <Typography variant="body2" fontWeight="bold">
              {realEstate.price} ₽
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {realEstate.area} м², {realEstate.rooms} ком.
            </Typography>
          </Box>
        );
      case 'Авто':
        const auto = advertisement as AutoAdvertisement;
        return (
          <Box sx={{ mt: 'auto' }}>
            <Typography variant="body2" fontWeight="bold">
              {auto.brand} {auto.model}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {auto.year} год
            </Typography>
          </Box>
        );
      case 'Услуги':
        const service = advertisement as ServiceAdvertisement;
        return (
          <Box sx={{ mt: 'auto' }}>
            <Typography variant="body2" fontWeight="bold">
              {service.cost} ₽
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Опыт: {service.experience} лет
            </Typography>
          </Box>
        );
      default:
        break;
    }
  };

  return (
    <Grid key={advertisement.id} size={{ xs: 12, sm: 6, md: 4 }}>
      <Card>
        <CardMedia
          component="img"
          height="200"
          image={advertisement.image ? advertisement.image : '/images/placeholder-images.png'}
        />
        <CardContent>
          <Typography variant="h6" component="h2" gutterBottom noWrap>
            {advertisement.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            📍 {advertisement.location}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              mb: 2,
            }}
          >
            {advertisement.description}
          </Typography>

          {renderSpecificFields()}

          <CButton
            fullWidth
            variant="outlined"
            sx={{ mt: 1, fontSize: 14 }}
            onClick={(e) => {
              e.stopPropagation();
              handleOpenAdvertisement();
            }}
          >
            Открыть
          </CButton>
        </CardContent>
      </Card>
    </Grid>
  );
};
