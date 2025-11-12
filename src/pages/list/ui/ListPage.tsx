import { fetchAdvertisements } from '@entities/advertisements';
import { Header } from '@features/advertisement/list';
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material';
import { useAppDispatch } from '@shared/hooks/useAppDispatch';
import React, { ChangeEvent, useEffect, useState } from 'react';

export const ListPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleCategoryChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  useEffect(() => {
    dispatch(fetchAdvertisements());
  }, []);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Header />

      <Paper sx={{ p: 3, mb: 4 }}>
        <Grid container spacing={3} alignItems="center">
          <Grid size={3}>
            <TextField
              fullWidth
              label="Поиск по названию"
              value={search}
              onChange={handleSearchChange}
              placeholder="Введите текст для поиска..."
            />
          </Grid>
          <Grid size={2}>
            <FormControl fullWidth>
              <InputLabel>Категория</InputLabel>
              <Select value={category} onChange={handleCategoryChange} label="Категория">
                <MenuItem value="">Все категории</MenuItem>
                <MenuItem value="real-estate">Недвижимость</MenuItem>
                <MenuItem value="auto">Авто</MenuItem>
                <MenuItem value="services">Услуги</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid sx={{ xs: 12 }}>
            <Button fullWidth variant="outlined">
              Сбросить
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};
