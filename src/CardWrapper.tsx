import React, { PropsWithChildren } from 'react';
import { alpha, Box, useTheme } from '@mui/material';

export const CardWrapper = ({ children }: PropsWithChildren) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: alpha(theme.palette.common.white, 0.11),
        boxShadow:
          '0px 2px 6px rgba(4, 6, 17, 0.2), inset 0px 0px 0px 1px rgba(255, 255, 255, 0.1)',
        borderRadius: 2,
        my: 2,
        p: 1.5,
      }}
    >
      {children}
    </Box>
  );
};
