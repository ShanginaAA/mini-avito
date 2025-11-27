export const CATEGORIES = [
  { value: '', name: 'Все' },
  { value: 'realEstate', name: 'Недвижимость' },
  { value: 'auto', name: 'Авто' },
  { value: 'services', name: 'Услуги' },
] as const;

export const REALTY_TYPES = [
  'Квартира',
  'Дом',
  'Коттедж',
  'Таунхаус',
  'Апартаменты',
  'Комната',
  'Участок',
];

export const AUTO_BRANDS = [
  'Toyota',
  'Honda',
  'BMW',
  'Mercedes',
  'Audi',
  'Volkswagen',
  'Hyundai',
  'Kia',
];

export const SERVICE_TYPES = ['Ремонт', 'Уборка', 'Доставка', 'Обучение', 'Консультация'];

export const ITEMS_PER_PAGE = 5;
