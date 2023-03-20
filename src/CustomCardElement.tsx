import React from 'react';
import {
  CardElement,
  CardElementProps,
} from '@basis-theory/basis-theory-react';
import { alpha, Box, useTheme } from '@mui/material';

export const CustomCardElement = React.forwardRef<any, CardElementProps>(
  (props, ref) => {
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
        <CardElement
          ref={ref}
          style={{
            base: {
              color: theme.palette.text.primary,
            },
          }}
          {...props}
        />
      </Box>
    );
  }
);
