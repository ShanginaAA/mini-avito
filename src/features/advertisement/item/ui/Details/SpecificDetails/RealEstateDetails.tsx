import { RealEstateAdvertisement } from '@entities/advertisements';
import React, { FC } from 'react';

type RealEstateDetailsProps = {
  realEstate: RealEstateAdvertisement;
};

export const RealEstateDetails: FC<RealEstateDetailsProps> = ({ realEstate }) => {
  return <div>RealEstateDetails</div>;
};
