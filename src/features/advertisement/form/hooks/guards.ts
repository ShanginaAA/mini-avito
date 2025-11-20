import {
  Advertisement,
  AutoAdvertisement,
  RealEstateAdvertisement,
  ServiceAdvertisement,
} from '@entities/advertisements';

const isRealEstateAdvertisement = (
  advertisement: Advertisement,
): advertisement is RealEstateAdvertisement => advertisement.type === 'Недвижимость';

const isAutoAdvertisement = (advertisement: Advertisement): advertisement is AutoAdvertisement =>
  advertisement.type === 'Авто';

const isServiceAdvertisement = (
  advertisement: Advertisement,
): advertisement is ServiceAdvertisement => advertisement.type === 'Услуги';

export { isRealEstateAdvertisement, isAutoAdvertisement, isServiceAdvertisement };
