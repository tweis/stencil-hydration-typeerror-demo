import { Config } from '@stencil/core';
import { hydrateServerOutputTarget } from '@netlogix/stencil-hydrate-server';

export const config: Config = {
  namespace: 'stencil-hydration-typeerror-demo',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    {
      type: 'dist-hydrate-script',
      dir: 'dist/hydrate',
    },
    hydrateServerOutputTarget({
      dir: 'dist/ssr-server',
    }),
  ],
  testing: {
    browserHeadless: "new",
  },
};