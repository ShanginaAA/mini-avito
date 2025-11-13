import { BaseLayout } from '@app/layouts';
import { fetchAdvertisements } from '@entities/advertisements';
import { Filters, Header } from '@features/advertisement/list';
import { useAppDispatch } from '@shared/hooks/useAppDispatch';
import { FC, useEffect } from 'react';

export const ListPage: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAdvertisements());
  }, []);

  return (
    <BaseLayout>
      <Header />
      <Filters />
    </BaseLayout>
    // <Grid >
  );
};
