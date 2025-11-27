import { Box } from '@mui/material';
import { CButton } from '@shared/ui/buttons';
import { FC } from 'react';

type FormStep = 'basic' | 'category';

interface FormActionsProps {
  activeStep: FormStep;
  isEditMode: boolean;
  isSubmitting: boolean;
  isInitialLoading: boolean;
  onNext: () => Promise<void> | void;
  onBack: () => void;
}

export const FormActions: FC<FormActionsProps> = ({
  activeStep,
  isEditMode,
  isSubmitting,
  isInitialLoading,
  onNext,
  onBack,
}) => {
  const isBasicStep = activeStep === 'basic';
  const submitLabel = isEditMode ? 'Сохранить изменения' : 'Разместить объявление';

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        gap: 2,
        flexWrap: 'wrap',
        mt: 4,
      }}
    >
      {!isBasicStep && (
        <CButton variant="outlined" type="button" onClick={onBack} disabled={isSubmitting}>
          Назад
        </CButton>
      )}

      {isBasicStep ? (
        <CButton
          variant="contained"
          onClick={onNext}
          disabled={isInitialLoading}
          sx={{ minWidth: 220 }}
        >
          Продолжить
        </CButton>
      ) : (
        <CButton variant="contained" type="submit" loading={isSubmitting} sx={{ minWidth: 220 }}>
          {submitLabel}
        </CButton>
      )}
    </Box>
  );
};
