import { z } from 'zod';

export const baseAdvertisementSchema = z.object({
  name: z
    .string()
    .min(5, 'Название должно содержать минимум 5 символов')
    .max(100, 'Название не должно превышать 100 символов'),
  description: z
    .string()
    .min(10, 'Описание должно содержать минимум 10 символов')
    .max(1000, 'Описание не должно превышать 1000 символов'),
  location: z
    .string()
    .min(2, 'Локация должна содержать минимум 2 символа')
    .max(100, 'Локация не должна превышать 100 символов'),
  type: z.string().min(1, 'Выберите тип объявления'),
  image: z.string().optional(),
});

export const realEstateSchema = baseAdvertisementSchema.extend({
  type: z.literal('Недвижимость'),
  propertyType: z.string().min(1, 'Выберите тип недвижимости'),
  area: z
    .number({ message: 'Введите площадь' })
    .min(1, 'Площадь должна быть больше 0')
    .max(10000, 'Площадь не может превышать 10000 м²'),
  rooms: z
    .number({ message: 'Введите количество комнат' })
    .min(1, 'Количество комнат должно быть не менее 1')
    .max(50, 'Количество комнат не может превышать 50'),
  price: z
    .number({ message: 'Введите цену' })
    .min(1, 'Цена должна быть больше 0')
    .max(100000000000, 'Цена не может превышать 100 млрд'),
});

export const autoSchema = baseAdvertisementSchema.extend({
  type: z.literal('Авто'),
  brand: z.string().min(1, 'Выберите марку автомобиля'),
  model: z
    .string()
    .min(1, 'Введите модель автомобиля')
    .max(50, 'Модель не должна превышать 50 символов'),
  year: z
    .number({ message: 'Введите год выпуска' })
    .min(1900, 'Год выпуска не может быть раньше 1900')
    .max(new Date().getFullYear() + 1, 'Год выпуска не может быть в будущем'),
  mileage: z
    .number()
    .min(0, 'Пробег не может быть отрицательным')
    .max(10000000, 'Пробег не может превышать 10 млн км')
    .optional(),
});

export const serviceSchema = baseAdvertisementSchema.extend({
  type: z.literal('Услуги'),
  serviceType: z.string().min(1, 'Выберите тип услуги'),
  experience: z
    .number({ message: 'Введите опыт работы' })
    .min(0, 'Опыт работы не может быть отрицательным')
    .max(100, 'Опыт работы не может превышать 100 лет'),
  cost: z
    .number({ message: 'Введите стоимость' })
    .min(1, 'Стоимость должна быть больше 0')
    .max(100000000, 'Стоимость не может превышать 100 млн'),
  workSchedule: z.string().max(100, 'График работы не должен превышать 100 символов').optional(),
});

export const advertisementSchema = z.discriminatedUnion('type', [
  realEstateSchema,
  autoSchema,
  serviceSchema,
]);
