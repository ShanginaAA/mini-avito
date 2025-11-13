import { Button, ButtonProps, CircularProgress, styled } from '@mui/material';
import React, { FC } from 'react';

interface CustomButtonProps extends ButtonProps {
  loading?: boolean;
}
const StyledButton = styled(Button)<CustomButtonProps>(({ theme, loading }) => ({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
}));

export const CButton: FC<CustomButtonProps> = (props) => {
  return (
    <StyledButton {...props}>
      {props.loading ? (
        <span className="MuiButton-icon">
          <CircularProgress className={'MuiCircularProgress-btn'} size={20} />
        </span>
      ) : (
        <span>{props.children}</span>
      )}
    </StyledButton>
  );
};
