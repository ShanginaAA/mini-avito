import { BaseLayout } from '@app/layouts';
import { useAdvertisementForm } from '@features/advertisement/form/hooks/useAdvertisementForm';
import { AdvertisementFormValues } from '@features/advertisement/form/hooks/formValues';
import { FormActions } from '@features/advertisement/form';
import { Alert, Box, CircularProgress, Step, StepLabel, Stepper } from '@mui/material';
import React, { useCallback, useMemo, useState } from 'react';
import { FormProvider } from 'react-hook-form';
import { BasicInfoStep, CategoryStep } from '@widgets/advertisement';

type FormStep = 'basic' | 'category';

const STEPS: { id: FormStep; label: string }[] = [
  { id: 'basic', label: 'Основная информация' },
  { id: 'category', label: 'Детали категории' },
];

const BASIC_FIELDS: (keyof AdvertisementFormValues)[] = ['name', 'description', 'location', 'type'];

export const FormPage = () => {
  const [activeStep, setActiveStep] = useState<FormStep>('basic');
  const { form, submitForm, isEditMode, isInitialLoading, isSubmitting, submitError } =
    useAdvertisementForm();
  const { trigger } = form;

  const handleNextStep = useCallback(async () => {
    const isValid = await trigger(BASIC_FIELDS, { shouldFocus: true });

    if (isValid) {
      setActiveStep('category');
    }
  }, [trigger]);

  const handlePrevStep = useCallback(() => {
    setActiveStep('basic');
  }, []);

  const stepIndex = useMemo(() => (activeStep === 'basic' ? 0 : 1), [activeStep]);

  return (
    <BaseLayout>
      <FormProvider {...form}>
        <Box
          component="form"
          noValidate
          onSubmit={submitForm}
          sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          <Stepper activeStep={stepIndex} sx={{ mb: 2 }}>
            {STEPS.map((step) => (
              <Step key={step.id}>
                <StepLabel>{step.label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {isInitialLoading ? (
            <Box
              sx={{
                py: 6,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: 2,
              }}
            >
              <CircularProgress />
            </Box>
          ) : (
            <>
              {activeStep === 'basic' && <BasicInfoStep />}
              {activeStep === 'category' && <CategoryStep />}

              {submitError ? (
                <Alert severity="error" sx={{ mt: 1 }}>
                  {submitError}
                </Alert>
              ) : null}

              <FormActions
                activeStep={activeStep}
                isEditMode={isEditMode}
                isSubmitting={isSubmitting}
                isInitialLoading={isInitialLoading}
                onNext={handleNextStep}
                onBack={handlePrevStep}
              />
            </>
          )}
        </Box>
      </FormProvider>
    </BaseLayout>
  );
};
