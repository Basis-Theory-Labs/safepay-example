import React from 'react';
import { CardElement, useBasisTheory } from '@basis-theory/basis-theory-react';
import { Button, Typography } from '@mui/material';
import { CardWrapper } from './CardWrapper';

export const Checkout = () => {
  const { bt } = useBasisTheory();

  return (
    <>
      <Typography variant="h2">Checkout</Typography>
      <Typography color="text.secondary" variant="body2">
        Type in your credit card number.
      </Typography>
      <CardWrapper>
        <CardElement
          id="my-card"
          style={{
            base: {
              color: '#EBEDFF',
            },
          }}
        />
      </CardWrapper>
      <Button color="primary" variant="contained">
        Submit
      </Button>
    </>
  );
};
