import { Category } from '@entities/advertisements';

type AdvertisementFormValues = {
  name: string;
  description: string;
  location: string;
  type: Category;
  image?: string;
  // Real estate
  propertyType?: string;
  area?: number;
  rooms?: number;
  price?: number;
  // Auto
  brand?: string;
  model?: string;
  year?: number;
  mileage?: number;
  // Services
  serviceType?: string;
  experience?: number;
  cost?: number;
  workSchedule?: string;
};

const DEFAULT_VALUES: AdvertisementFormValues = {
  name: '',
  description: '',
  location: '',
  type: 'Недвижимость',
  image: '',
  propertyType: '',
  area: undefined,
  rooms: undefined,
  price: undefined,
  brand: '',
  model: '',
  year: undefined,
  mileage: undefined,
  serviceType: '',
  experience: undefined,
  cost: undefined,
  workSchedule: '',
};

export { type AdvertisementFormValues, DEFAULT_VALUES };
