import { styled, TextField, TextFieldProps } from '@mui/material';
import { FC } from 'react';

const StyledInput = styled(TextField)<TextFieldProps>(({ theme }) => ({
  width: '100%',
  overflow: 'hidden',
  '& .MuiInputBase-root': {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    '&:hover': {
      border: `1px solid rgba(${theme.palette.primary.main} / 0.39)`,
    },
    '&:after, &:before': {
      borderBottom: 0,
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      border: `1px solid ${theme.palette.primary.main}`,
    },
    '& input.MuiInputBase-input, & input.MuiAutocomplete-input': {
      height: '40px',
    },
    '& input.MuiInputBase-input, & input.MuiAutocomplete-input, & textarea.MuiInputBase-inputMultiline':
      {
        padding: '7px 12px',
        boxSizing: 'border-box',
      },
  },
}));

export const CInput: FC<TextFieldProps> = (props) => {
  return <StyledInput {...props} />;
};
