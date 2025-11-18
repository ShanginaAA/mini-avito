import { BaseLayout } from '@app/layouts';
import {
  fetchAdvertisements,
  selectAdvertisements,
  selectFetchStatus,
} from '@entities/advertisements';
import { CardAdvertisement, Filters, Header } from '@features/advertisement/list';
import { CardSkeleton } from '@features/advertisement/list/ui/CardAdvertisement';
import { Grid } from '@mui/material';
import { useAppDispatch } from '@shared/hooks/useAppDispatch';
import { useAppSelector } from '@shared/hooks/useAppSelector';
import { FC, useCallback, useEffect } from 'react';

export const ListPage: FC = () => {
  const dispatch = useAppDispatch();
  const advertisements = useAppSelector(selectAdvertisements);
  const fetchStatus = useAppSelector(selectFetchStatus);

  useEffect(() => {
    dispatch(fetchAdvertisements());
  }, []);

  const renderCardAdvertisements = useCallback(() => {
    if (fetchStatus === 'idle' || fetchStatus === 'loading') {
      return <CardSkeleton />;
    } else if (fetchStatus === 'failed') {
      <>Error</>;
    } else if (advertisements && advertisements.length > 0) {
      return advertisements.map((advertisement) => (
        <CardAdvertisement advertisement={advertisement} />
      ));
    } else {
      <>Empty</>;
    }
  }, [fetchStatus, advertisements]);

  return (
    <BaseLayout>
      <Header />
      <Filters />
      <Grid container spacing={3}>
        {renderCardAdvertisements()}
      </Grid>
    </BaseLayout>
    // <Grid >
  );
};
