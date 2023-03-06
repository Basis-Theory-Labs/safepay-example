import type { SandpackProviderProps } from '@codesandbox/sandpack-react';
import { files } from './files';

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
