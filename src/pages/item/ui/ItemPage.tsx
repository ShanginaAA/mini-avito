import { BaseLayout } from '@app/layouts';
import {
  fetchAdvertisementById,
  selectCurrentAdvertisement,
  selectFetchByIdStatus,
} from '@entities/advertisements';
import { Details, Header } from '@features/advertisement/item';
import { Box } from '@mui/material';
import { useAppDispatch } from '@shared/hooks/useAppDispatch';
import { useAppSelector } from '@shared/hooks/useAppSelector';
import { CButton } from '@shared/ui/buttons';
import React, { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const ItemPage = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();

  const advertisement = useAppSelector(selectCurrentAdvertisement);
  const fetchStatus = useAppSelector(selectFetchByIdStatus);

  useEffect(() => {
    dispatch(fetchAdvertisementById(id));
  }, [id]);

  const renderCurrentAdvertisement = useCallback(() => {
    if (fetchStatus === 'idle' || fetchStatus === 'loading') {
      return <>Loading</>;
    } else if (fetchStatus === 'failed') {
      return <>Error</>;
    } else if (advertisement) {
      return (
        <>
          <Details advertisement={advertisement} />
        </>
      );
    } else {
      return <>Empty</>;
    }
  }, [fetchStatus, advertisement]);
  return (
    <BaseLayout>
      <Header />
      {renderCurrentAdvertisement()}
    </BaseLayout>
  );
};
