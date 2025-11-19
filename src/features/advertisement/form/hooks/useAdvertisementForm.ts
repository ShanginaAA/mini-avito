import {
  AdvertisementFormData,
  selectCurrentAdvertisement,
  ServiceFormData,
} from '@entities/advertisements';
import { useAppSelector } from '@shared/hooks/useAppSelector';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

import { zodResolver } from '@hookform/resolvers/zod';
import { advertisementSchema } from '../lib/validationSchemas';

export const useAdvertisementForm = () => {
  const { id } = useParams<{ id: string }>();

  const advertisement = useAppSelector(selectCurrentAdvertisement);

  const formOptions = {
    resolver: zodResolver(advertisementSchema),
    defaultValues: {
      name: '',
      description: '',
      location: '',
      type: 'Недвижимость',
      image: '',
      // Поля для недвижимости
      propertyType: '',
      area: undefined,
      rooms: undefined,
      price: undefined,
      // Поля для авто
      brand: '',
      model: '',
      year: undefined,
      mileage: undefined,
      // Поля для услуг
      serviceType: '',
      experience: undefined,
      cost: undefined,
      workSchedule: '',
    },
  };

  const { watch, reset, handleSubmit, trigger } = useForm<any>(formOptions);
};
