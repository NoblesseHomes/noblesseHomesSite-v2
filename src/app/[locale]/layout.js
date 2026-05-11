import { routing } from '@/i18n/routing';
import { NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';

import './globals.css';

import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';

import ToastProvider from '@/components/toastProvider/provider';

import ConsentProvider from '../providers/consent-provider';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter', // Optional: for Tailwind
});

export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className={`${inter.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="flex min-h-full flex-col">
        <NextIntlClientProvider>
          <ConsentProvider>
            <ToastProvider />
            <Header />
            <main>{children}</main>
            <Footer />
          </ConsentProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
