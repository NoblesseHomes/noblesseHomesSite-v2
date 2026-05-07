'use client';

import { Toaster } from 'react-hot-toast';

export default function ToastProvider() {
  return (
    <Toaster
      position="top-right"
      reverseOrder={false}
      toastOptions={{
        // Глобальные настройки стилей
        duration: 3000,
        style: {
          background: 'white',
          color: '#0f1727d9',
        },
      }}
      containerStyle={{ top: 80 }}
    />
  );
}
