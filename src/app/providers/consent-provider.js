'use client';

import { ConsentManagerProvider, ConsentBanner, ConsentDialog } from '@c15t/nextjs';

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
      }}
    >
      {children}

      <ConsentBanner />

      <ConsentDialog />
    </ConsentManagerProvider>
  );
}
