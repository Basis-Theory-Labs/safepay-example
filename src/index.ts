import type { SandpackProviderProps } from '@codesandbox/sandpack-react';
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

const project: SandpackProviderProps = {
  customSetup: {
    dependencies: {
      '@basis-theory/basis-theory-react': 'latest',
      '@mui/material': '^5',
      '@emotion/react': '^11',
      '@emotion/styled': '^11',
    },
  },
  files,
  options: {
    externalResources: [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Outfit:wght@500&family=Poppins:wght@600&display=swap',
    ],
  },
  template: 'react-ts',
};

declare global {
  interface Window {
    SafePayExampleProject: SandpackProviderProps;
  }
}

window.SafePayExampleProject = project;

export { project };
