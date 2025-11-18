import { ServiceAdvertisement } from '@entities/advertisements';
import React, { FC } from 'react';

type ServiceDetailsProps = {
  service: ServiceAdvertisement;
};

export const ServiceDetails: FC<ServiceDetailsProps> = ({ service }) => {
  return <div>ServiceDetails</div>;
};
