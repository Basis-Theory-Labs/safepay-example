import React, { useRef } from 'react';
import {
  BasisTheoryProvider,
  useBasisTheory,
} from '@basis-theory/basis-theory-react';
import { Button, Typography } from '@mui/material';
import { CustomCardElement } from './CustomCardElement';

export const Checkout = () => {
  const { bt } = useBasisTheory('YOUR_PUBLIC_KEY_HERE', { elements: true });
  const cardRef = useRef(null);

  const submit = async () => {
    if (cardRef.current?.metadata?.complete) {
      await bt.tokens.create({
        type: 'card',
        data: cardRef?.current,
      });
    }
  };

  return (
    <BasisTheoryProvider bt={bt}>
      <Typography variant="h2">Checkout</Typography>
      <Typography color="text.secondary" variant="body2">
        Type in your credit card number.
      </Typography>
      <CustomCardElement id="my-card" ref={cardRef} />
      <Button color="primary" onClick={submit} variant="contained">
        Submit
      </Button>
    </BasisTheoryProvider>
  );
};
