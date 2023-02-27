import fs from 'fs';
import path from 'path';

const App = fs
  .readFileSync(path.join(__dirname, 'App.tsx'), {
    encoding: 'utf8',
  })
  .toString();

const Checkout = fs
  .readFileSync(path.join(__dirname, 'Checkout.tsx'), {
    encoding: 'utf8',
  })
  .toString();

const Container = fs
  .readFileSync(path.join(__dirname, 'Container.tsx'), {
    encoding: 'utf8',
  })
  .toString();

const CardWrapper = fs
  .readFileSync(path.join(__dirname, 'CardWrapper.tsx'), {
    encoding: 'utf8',
  })
  .toString();

const files = {
  '/App.tsx': {
    code: App,
    hidden: true,
  },
  '/Container.tsx': {
    code: Container,
    hidden: true,
  },
  '/Checkout.tsx': {
    code: Checkout,
    active: true,
  },
  '/CardWrapper.tsx': {
    code: CardWrapper,
  },
};

export { files };
