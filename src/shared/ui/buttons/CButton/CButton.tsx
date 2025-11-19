import { Button, ButtonProps, CircularProgress, styled, Typography } from '@mui/material';
import React, { FC } from 'react';

interface CustomButtonProps extends ButtonProps {
  loading?: boolean;
}
const StyledButton = styled(Button)<CustomButtonProps>(({ theme, loading }) => ({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '8px 30px',
  transition:
    'background-color .3s ease, color .3s ease, border-radius .3s ease, scale .3s ease, box-shadow .3s ease',
  '&:hover': {
    borderRadius: 20,
    color: '#000',
    backgroundColor: theme.palette.primary.light,
    scale: 1.05,
    boxShadow:
      '0 7px 18px -15px hsla(0,0%,5%,.04),0 20px 20px 0 hsla(0,0%,5%,.05),0 24px 19px -30px hsla(0,0%,5%,.25)',
  },
}));

export const CButton: FC<CustomButtonProps> = (props) => {
  return (
    <StyledButton {...props}>
      {props.loading ? (
        <span className="MuiButton-icon">
          <CircularProgress className={'MuiCircularProgress-btn'} size={20} />
        </span>
      ) : (
        <Typography variant="button" fontWeight={700} letterSpacing={0.9}>
          {props.children}
        </Typography>
      )}
    </StyledButton>
  );
};
