import { CATEGORIES } from '@entities/advertisements';
import { Box, Chip, Grid, Typography } from '@mui/material';
import { CInput } from '@shared/ui/inputs';
import React, { useState } from 'react';

export const Filters = () => {
  const [activeCategory, setActiveCategory] = useState<string>('');

  return (
    <Grid container spacing={3} alignItems={'center'}>
      <Grid container size={{ xs: 12, md: 6 }} spacing={1}>
        {CATEGORIES.map((item) => (
          <Chip
            key={item.value}
            label={item.name}
            clickable
            onClick={() => setActiveCategory(item.value)}
            sx={{
              fontWeight: 700,
              fontSize: '16px',
              letterSpacing: '0.9px',
              backgroundColor: activeCategory == item.value ? '#282828' : '#f1f1f1',
              color: activeCategory === item.value ? '#fff' : 'inherit',
              borderRadius: '25px',
              cursor: 'pointer',
              padding: '20px 30px',
              width: 'auto',
              transition: 'all 0.2s ease-in-out',
              '&:hover': {
                backgroundColor: activeCategory === item.value ? '#282828' : '#e4e4e4',
              },
            }}
          />
        ))}
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <CInput variant="outlined" placeholder="Поиск объявлений" />
      </Grid>
    </Grid>
  );
};
