import { Grid } from '@mui/material';
import React from 'react';

export const BaseLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Grid
      container
      direction={'column'}
      sx={{
        maxWidth: '1400px',
        width: 'calc(100vw - 100px)',
        margin: '30px auto',
        backgroundColor: '#fff',
        borderRadius: '10px',
        height: '100%',
        '& > *': {
          width: '90%',
          margin: '0 auto',
          padding: '20px 0',
        },
      }}
    >
      {children}
    </Grid>
  );
};
