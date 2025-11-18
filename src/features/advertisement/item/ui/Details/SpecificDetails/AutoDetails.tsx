import { AutoAdvertisement } from '@entities/advertisements';
import React, { FC } from 'react';

type AutoDetailsProps = {
  auto: AutoAdvertisement;
};

export const AutoDetails: FC<AutoDetailsProps> = ({ auto }) => {
  return <div>AutoDetails</div>;
};
