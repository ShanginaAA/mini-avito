export type Category = 'Недвижимость' | 'Авто' | 'Услуги';

export interface BaseAdvertisements {
  id: string;
  name: string;
  description: string;
  location: string;
  image?: string;
  type: Category;
  createdAt: string;
  updatedAt: string;
}

export interface RealEstateAdvertisement extends BaseAdvertisements {
  propertyType: string;
  area: number;
  rooms: number;
  price: number;
}

export interface AutoAdvertisement extends BaseAdvertisements {
  brand: string;
  model: string;
  year: number;
  mileage?: number;
}

export interface ServiceAdvertisement extends BaseAdvertisements {
  serviceType: string;
  experience: number;
  cost: number;
  workSchedule?: string;
}

export type Advertisement = RealEstateAdvertisement | AutoAdvertisement | ServiceAdvertisement;

export type AdvertisementFormData = Omit<Advertisement, 'id' | 'createdAt' | 'updatedAt'>;

export type RealEstateFormData = Omit<RealEstateAdvertisement, 'id' | 'createdAt' | 'updatedAt'>;
export type AutoFormData = Omit<AutoAdvertisement, 'id' | 'createdAt' | 'updatedAt'>;
export type ServiceFormData = Omit<ServiceAdvertisement, 'id' | 'createdAt' | 'updatedAt'>;
