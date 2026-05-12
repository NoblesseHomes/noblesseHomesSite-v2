'use client';

import { ConsentManagerProvider, ConsentBanner, ConsentDialog } from '@c15t/nextjs';
import { gtag } from '@c15t/scripts/google-tag';

export default function ConsentProvider({ children }) {
  return (
    <ConsentManagerProvider
      options={{
        mode: 'hosted',

        backendURL: 'https://good-seal-biathlon-encouraging-metro-io.inth.app',

        consentCategories: ['necessary', 'measurement'],

        // только для dev
        overrides: {
          country: 'CZ',
        },

        scripts: [
          gtag({
            id: 'G-4518J7PV2P',
            category: 'measurement',
          }),
        ],
      }}
    >
      {children}

      <ConsentBanner />

      <ConsentDialog />
    </ConsentManagerProvider>
  );
}
