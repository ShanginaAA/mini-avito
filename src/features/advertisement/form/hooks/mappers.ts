import {
  Advertisement,
  AdvertisementFormData,
  AutoAdvertisement,
  AutoFormData,
  RealEstateAdvertisement,
  RealEstateFormData,
  ServiceAdvertisement,
  ServiceFormData,
} from '@entities/advertisements';
import { AdvertisementFormValues, DEFAULT_VALUES } from './formValues';
import { isAutoAdvertisement, isRealEstateAdvertisement, isServiceAdvertisement } from './guards';

// адаптирует данные “из стора в форму”
const mapAdvertisementToFormValues = (advertisement: Advertisement): AdvertisementFormValues => {
  const base = {
    ...DEFAULT_VALUES,
    name: advertisement.name ?? '',
    description: advertisement.description ?? '',
    location: advertisement.location ?? '',
    type: advertisement.type,
    image: advertisement.image ?? '',
  };

  if (isRealEstateAdvertisement(advertisement)) {
    return {
      ...base,
      propertyType: advertisement.propertyType ?? '',
      area: advertisement.area,
      rooms: advertisement.rooms,
      price: advertisement.price,
    };
  }

  if (isAutoAdvertisement(advertisement)) {
    return {
      ...base,
      brand: advertisement.brand ?? '',
      model: advertisement.model ?? '',
      year: advertisement.year,
      mileage: advertisement.mileage,
    };
  }

  if (isServiceAdvertisement(advertisement)) {
    return {
      ...base,
      serviceType: advertisement.serviceType ?? '',
      experience: advertisement.experience,
      cost: advertisement.cost,
      workSchedule: advertisement.workSchedule ?? '',
    };
  }

  return base;
};

// адаптирует данные “из формы обратно в доменную модель/запрос”
const buildPayloadFromValues = (values: AdvertisementFormValues): AdvertisementFormData => {
  const base = {
    name: values.name,
    description: values.description,
    location: values.location,
    type: values.type,
    image: values.image,
  };

  switch (values.type) {
    case 'Недвижимость':
      return {
        ...base,
        type: 'Недвижимость',
        propertyType: values.propertyType ?? '',
        area: values.area as number,
        rooms: values.rooms as number,
        price: values.price as number,
      } as RealEstateFormData;
    case 'Авто':
      return {
        ...base,
        type: 'Авто',
        brand: values.brand ?? '',
        model: values.model ?? '',
        year: values.year as number,
        mileage: values.mileage,
      } as AutoFormData;
    case 'Услуги':
      return {
        ...base,
        type: 'Услуги',
        serviceType: values.serviceType ?? '',
        experience: values.experience as number,
        cost: values.cost as number,
        workSchedule: values.workSchedule,
      } as ServiceFormData;
    default:
      return base as AdvertisementFormData;
  }
};

export { mapAdvertisementToFormValues, buildPayloadFromValues };
