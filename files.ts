/* eslint-disable import/extensions,import/no-unresolved,@typescript-eslint/ban-ts-comment */
// @ts-ignore
import AppSrc from 'bundle-text:./src/App.tsx';
// @ts-ignore
import CardWrapperSrc from 'bundle-text:./src/CardWrapper.tsx';
// @ts-ignore
import CheckoutSrc from 'bundle-text:./src/Checkout.tsx';
// @ts-ignore
import ContainerSrc from 'bundle-text:./src/Container.tsx';

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
  '/CardWrapper.tsx': {
    code: CardWrapperSrc,
  },
};

export { files };
/* eslint-enable import/extensions,import/no-unresolved,@typescript-eslint/ban-ts-comment */
