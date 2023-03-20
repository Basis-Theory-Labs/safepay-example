/* eslint-disable import/extensions,import/no-unresolved,@typescript-eslint/ban-ts-comment */
// @ts-ignore
import AppSrc from 'bundle-text:./src/App.tsx';
// @ts-ignore
import CheckoutSrc from 'bundle-text:./src/Checkout.tsx';
// @ts-ignore
import ContainerSrc from 'bundle-text:./src/Container.tsx';
// @ts-ignore
import CustomCardElementSrc from 'bundle-text:./src/CustomCardElement.tsx';
// @ts-ignore
import themeSrc from 'bundle-text:./src/theme.ts';

const files = {
  '/App.tsx': {
    hidden: true,
    code: AppSrc,
  },
  '/Container.tsx': {
    hidden: true,
    code: ContainerSrc,
  },
  '/Checkout.tsx': {
    active: true,
    code: CheckoutSrc,
  },
  '/CustomCardElement.tsx': {
    code: CustomCardElementSrc,
  },
  '/theme.ts': {
    code: themeSrc,
  },
};

export { files };
/* eslint-enable import/extensions,import/no-unresolved,@typescript-eslint/ban-ts-comment */
