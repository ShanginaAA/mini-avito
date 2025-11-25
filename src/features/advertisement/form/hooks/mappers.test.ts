import {
  AutoAdvertisement,
  RealEstateAdvertisement,
  ServiceAdvertisement,
} from '@entities/advertisements';
import { buildPayloadFromValues, mapAdvertisementToFormValues } from './mappers';
import { DEFAULT_VALUES } from './formValues';

const baseRealEstate: RealEstateAdvertisement = {
  id: '1',
  name: 'Test Real Estate',
  description: 'Test Description',
  location: 'Test Location',
  image: 'img.jpg',
  type: 'Недвижимость',
  createdAt: '2021-01-01',
  updatedAt: '2021-01-01',
  propertyType: 'Test Property Type',
  area: 100,
  rooms: 2,
  price: 100000,
};

const baseAuto: AutoAdvertisement = {
  id: '2',
  name: 'Test Auto',
  description: 'Test Description',
  location: 'Москва',
  image: 'auto.jpg',
  type: 'Авто',
  createdAt: '2021-01-01',
  updatedAt: '2021-01-01',
  brand: 'Test Brand',
  model: 'Test Model',
  year: 2021,
  mileage: 100000,
};

const baseService: ServiceAdvertisement = {
  id: '3',
  name: 'Test Service',
  description: 'Test Description',
  location: 'Казань',
  image: 'service.jpg',
  type: 'Услуги',
  createdAt: '2021-01-01',
  updatedAt: '2021-01-01',
  serviceType: 'Test Service Type',
  experience: 10,
  cost: 100000,
  workSchedule: 'Пн-Пт',
};

describe('mappers', () => {
  describe('mapAdvertisementToFormValues', () => {
    it('should map real estate advertisement to form values', () => {
      const result = mapAdvertisementToFormValues(baseRealEstate);
      expect(result).toEqual({
        ...DEFAULT_VALUES,
        name: baseRealEstate.name,
        description: baseRealEstate.description,
        location: baseRealEstate.location,
        type: baseRealEstate.type,
        image: baseRealEstate.image,
        propertyType: baseRealEstate.propertyType,
        area: baseRealEstate.area,
        rooms: baseRealEstate.rooms,
        price: baseRealEstate.price,
      });
    });

    it('should map auto advertisement to form values', () => {
      const result = mapAdvertisementToFormValues(baseAuto);
      expect(result).toEqual({
        ...DEFAULT_VALUES,
        name: baseAuto.name,
        description: baseAuto.description,
        location: baseAuto.location,
        type: baseAuto.type,
        brand: baseAuto.brand,
        image: baseAuto.image,
        model: baseAuto.model,
        year: baseAuto.year,
        mileage: baseAuto.mileage,
      });
    });

    it('should map service advertisement to form values', () => {
      const result = mapAdvertisementToFormValues(baseService);
      expect(result).toEqual({
        ...DEFAULT_VALUES,
        name: baseService.name,
        description: baseService.description,
        location: baseService.location,
        type: baseService.type,
        image: baseService.image,
        serviceType: baseService.serviceType,
        experience: baseService.experience,
        cost: baseService.cost,
        workSchedule: baseService.workSchedule,
      });
    });
  });

  describe('buildPayloadFromValues', () => {
    it('should build payload from real estate form values', () => {
      const payload = buildPayloadFromValues({
        ...DEFAULT_VALUES,
        name: 'Test Real Estate',
        description: 'Test Description',
        location: 'Test Location',
        image: 'img.jpg',
        type: 'Недвижимость',
        propertyType: 'Test Property Type',
        area: 100,
        rooms: 2,
        price: 100000,
      });
      expect(payload).toEqual({
        name: 'Test Real Estate',
        description: 'Test Description',
        location: 'Test Location',
        image: 'img.jpg',
        type: 'Недвижимость',
        propertyType: 'Test Property Type',
        area: 100,
        rooms: 2,
        price: 100000,
      });
    });

    it('should build payload from auto form values', () => {
      const payload = buildPayloadFromValues({
        ...DEFAULT_VALUES,
        type: 'Авто',
        name: 'Audi Q7',
        description: 'Описание',
        location: 'СПб',
        brand: 'Audi',
        model: 'Q7',
        year: 2021,
        mileage: 15000,
      });
      expect(payload).toEqual({
        name: 'Audi Q7',
        description: 'Описание',
        location: 'СПб',
        type: 'Авто',
        brand: 'Audi',
        model: 'Q7',
        year: 2021,
        mileage: 15000,
        image: '',
      });
    });

    it('should build payload from service form values', () => {
      const payload = buildPayloadFromValues({
        ...DEFAULT_VALUES,
        type: 'Услуги',
        name: 'Ремонт',
        description: 'Описание',
        location: 'Казань',
        serviceType: 'Отделка',
        experience: 10,
        cost: 50000,
        workSchedule: 'Пн-Пт',
      });
      expect(payload).toEqual({
        name: 'Ремонт',
        description: 'Описание',
        location: 'Казань',
        type: 'Услуги',
        serviceType: 'Отделка',
        experience: 10,
        cost: 50000,
        workSchedule: 'Пн-Пт',
        image: '',
      });
    });
  });
});
