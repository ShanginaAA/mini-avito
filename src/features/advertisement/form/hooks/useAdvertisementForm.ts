import {
  createAdvertisement,
  fetchAdvertisementById,
  selectCurrentAdvertisement,
  selectFetchByIdStatus,
  updateAdvertisement,
} from '@entities/advertisements';
import { useAppDispatch } from '@shared/hooks/useAppDispatch';
import { useAppSelector } from '@shared/hooks/useAppSelector';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Resolver, SubmitHandler, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { advertisementSchema } from '../lib/validationSchemas';
import { AdvertisementFormValues, DEFAULT_VALUES } from './formValues';
import { mapAdvertisementToFormValues, buildPayloadFromValues } from './mappers';

export const useAdvertisementForm = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const isEditMode = Boolean(id);

  const advertisement = useAppSelector(selectCurrentAdvertisement);
  const fetchByIdStatus = useAppSelector(selectFetchByIdStatus);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const formOptions = {
    resolver: zodResolver(advertisementSchema) as Resolver<AdvertisementFormValues>,
    defaultValues: DEFAULT_VALUES,
  };

  const { control, watch, reset, trigger, setValue, getValues, handleSubmit, formState } =
    useForm<AdvertisementFormValues>(formOptions);

  // Загружаем объявление для редактирования, если его ещё нет в сторе
  useEffect(() => {
    if (!isEditMode || !id) return;

    if (advertisement && advertisement.id === id) return;

    dispatch(fetchAdvertisementById(id));
  }, [dispatch, id, isEditMode, advertisement?.id]);

  // Заполняем форму данными объявления после загрузки
  useEffect(() => {
    if (!isEditMode || !id || !advertisement) return;

    if (advertisement.id !== id) return;

    reset(mapAdvertisementToFormValues(advertisement));
  }, [advertisement, id, isEditMode, reset]);

  const handleFormSubmit: SubmitHandler<AdvertisementFormValues> = useCallback(
    async (values) => {
      setSubmitError(null);
      setIsSubmitting(true);
      const payload = buildPayloadFromValues(values);

      try {
        if (isEditMode && id) {
          await dispatch(updateAdvertisement({ id, data: payload })).unwrap();
        } else {
          await dispatch(createAdvertisement(payload)).unwrap();
          reset(DEFAULT_VALUES);
        }
      } catch (error) {
        if (error instanceof Error) {
          setSubmitError(error.message);
        } else {
          setSubmitError('Не удалось сохранить объявление');
        }
      } finally {
        setIsSubmitting(false);
      }
    },
    [dispatch, id, isEditMode, reset],
  );

  const submitForm = useMemo(
    () => handleSubmit(handleFormSubmit),
    [handleSubmit, handleFormSubmit],
  );

  const currentType = watch('type');
  const isInitialLoading = isEditMode && fetchByIdStatus === 'loading';

  return {
    control,
    watch,
    reset,
    trigger,
    setValue,
    getValues,
    formState,
    submitForm,
    handleSubmit,
    isEditMode,
    currentType,
    isInitialLoading,
    isSubmitting,
    submitError,
  };
};
