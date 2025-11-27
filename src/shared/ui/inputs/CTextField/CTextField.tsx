import {
  FormControl,
  FormHelperText,
  InputLabel,
  styled,
  TextField,
  TextFieldProps,
  Typography,
} from '@mui/material';
import { FC } from 'react';

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  width: '100%',
  gap: '3px',
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: 14,
    backgroundColor: theme.palette.common.white,
    transition: 'box-shadow .2s ease, border-color .2s ease',
    '& fieldset': {
      borderColor: theme.palette.grey[300],
    },
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.dark,
      boxShadow: `0 0 0 2px ${theme.palette.primary.main}1a`,
    },
    '&.Mui-error fieldset': {
      borderColor: theme.palette.error.main,
    },
  },
  '& .MuiInputBase-input': {
    padding: theme.spacing(1.5, 2),
    fontSize: 16,
  },
  '& .MuiInputBase-multiline': {
    padding: 0,
  },
}));

export const CTextField: FC<TextFieldProps> = ({
  label,
  error,
  helperText,
  required,
  ...restProps
}) => {
  return (
    <StyledFormControl>
      {label ? (
        <InputLabel
          shrink
          sx={{
            fontWeight: 700,
            backgroundColor: '#fff',
            padding: '0px 5px',
            color: error ? 'error.main' : 'text.primary',
          }}
        >
          {label}
          {required ? (
            <Typography component="span" color="error.main" ml={0.5}>
              *
            </Typography>
          ) : null}
        </InputLabel>
      ) : null}

      <StyledTextField {...restProps} error={error} required={required} label={undefined} />
      {helperText ? (
        <FormHelperText error={error} sx={{ margin: 0 }}>
          {helperText}
        </FormHelperText>
      ) : null}
    </StyledFormControl>
  );
};
