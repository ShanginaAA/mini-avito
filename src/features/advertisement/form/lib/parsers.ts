export const numberParser = (value: string) => {
  if (value === '') return undefined;
  const parsed = Number(value);

  return isNaN(parsed) ? undefined : parsed;
};
