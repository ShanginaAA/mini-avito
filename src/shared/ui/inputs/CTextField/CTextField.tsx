import { FormControl, styled, TextField, TextFieldProps } from '@mui/material';
import React from 'react';

interface CustomTextFieldProps extends Omit<TextFieldProps, 'variant'> {
  variant?: 'outlined' | 'filled' | 'standard';
  helperText?: string;
  error?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  fullWidth?: boolean;
}

const StyledTextField = styled(TextField)<CustomTextFieldProps>(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: 8,
    fontFamily: '"PT Sans", Arial, sans-serif',
    transition: 'all 0.2s ease-in-out',

    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.primary.main,
    },

    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderWidth: 2,
      borderColor: theme.palette.primary.main,
    },

    '&.Mui-error': {
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.error.main,
      },
    },
  },

  '& .MuiInputLabel-root': {
    fontFamily: '"PT Sans", Arial, sans-serif',

    '&.Mui-focused': {
      color: theme.palette.primary.main,
    },
  },

  '& .MuiFormHelperText-root': {
    fontFamily: '"PT Sans", Arial, sans-serif',
    marginLeft: 0,
  },
}));

export const CTextField = () => {
  return (
    <FormControl fullWidth={fullWidth} error={showError}>
      <StyledTextField
        variant={variant}
        error={showError}
        fullWidth={fullWidth}
        InputProps={inputProps}
        helperText={undefined} // Убираем стандартный helperText
        {...(formik && field)}
        {...props}
      />

      {showHelperText && <FormHelperText sx={{ mx: 0 }}>{showHelperText}</FormHelperText>}
    </FormControl>
  );
};
