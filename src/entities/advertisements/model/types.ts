export type Category = 'Недвижимость' | 'Авто' | 'Услуги';

export interface Realty {
  type: string;
  area: number;
  rooms: number;
  price: number;
}

export interface Auto {
  brand: string;
  model: string;
  year: number;
  mileage?: number;
  price: number;
}

export interface Service {
  serviceType: string;
  experience: number;
  price: number;
  schedule?: string;
}

export interface Advertisements {
  id: string;
  title: string;
  description: string;
  location: string;
  images?: string[];
  category: Category;
  realtyDetails?: Realty;
  autoDetails?: Auto;
  serviceDetails?: Service;
  createdAt: string;
  updatedAt: string;
}

export type CreateAdvertisementDto = Omit<Advertisements, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateAdvertisementDto = Partial<CreateAdvertisementDto>;
