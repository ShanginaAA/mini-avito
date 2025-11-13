import { CATEGORIES } from '@entities/advertisements';
import { Box, Chip, Grid, Typography } from '@mui/material';
import { CInput } from '@shared/ui/inputs';
import React, { useState } from 'react';

export const Filters = () => {
  const [activeCategory, setActiveCategory] = useState<string>('');

  return (
    <Grid container spacing={2} alignItems={'center'}>
      <Grid display="flex" size={'auto'} gap={1}>
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
              backgroundColor: activeCategory == item.value ? '#282828' : '#f9f9f9',
              color: activeCategory === item.value ? '#fff' : 'inherit',
              borderRadius: '25px',
              cursor: 'pointer',
              padding: '20px 30px',
              width: 'auto',
              transition: 'all 0.2s ease-in-out',
              '&:hover': {
                backgroundColor: activeCategory === item.value ? '#282828' : '#f3f3f3ff',
              },
            }}
          />
        ))}
      </Grid>
      <Grid size="grow">
        <CInput variant="outlined" placeholder="Поиск объявлений" />
      </Grid>
    </Grid>
  );
};
