import { Box, Card, CardContent, Grid, Skeleton } from '@mui/material';
import { FC } from 'react';

type CardSkeletonProps = {
  count?: number;
};

export const CardSkeleton: FC<CardSkeletonProps> = ({ count = 3 }) => {
  return [...Array(count)].map((_, index) => (
    <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
      <Card sx={{ height: '100%' }}>
        <Skeleton variant="rectangular" height={200} />
        <CardContent>
          <Box sx={{ mb: 1 }}>
            <Skeleton variant="rounded" width={100} height={24} />
          </Box>
          <Skeleton variant="text" height={32} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={20} sx={{ mb: 2 }} />
          <Skeleton variant="rounded" width="100%" height={36} />
        </CardContent>
      </Card>
    </Grid>
  ));
};
