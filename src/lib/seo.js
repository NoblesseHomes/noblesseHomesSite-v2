const SITE_NAME = 'NoblesseHomes';

// Исправляем логику выбора URL
const BASE_URL =
  process.env.NODE_ENV === 'development' ? process.env.BASE_URL_DEV : process.env.BASE_URL_PROD;

const OG_IMAGE = {
  url: '/opengraph-image.png', // путь от папки public
  width: 1200,
  height: 630,
};

const OG_LOCALE = {
  cs: 'cz_CZ',
  en: 'en_GB',
};

const LANGUAGE = process.env.SUPPORTED_LANGUAGE.split(',');

function generatePath(locale, path) {
  if (path === '/') return locale === 'cs' ? path : `/${locale}`;
  return locale === 'cs' ? path : `/${locale}/${path}`;
}

function generateHreflang(paht) {
  const obj = {};

  LANGUAGE.forEach((elem) => (obj[elem] = elem === 'cs' ? paht : `/${elem}/${paht}`));

  return obj;
}

export default function createMetadata({
  title = '',
  description = '',
  path = '/',
  noIndex = false,
  locale = 'cs',
} = {}) {
  // Обязательно = {} для защиты от undefined
  return {
    metadataBase: new URL(BASE_URL || 'http://localhost:3000'),
    title,
    description,
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
    openGraph: {
      type: 'website',
      url: path,
      locale: OG_LOCALE[locale],
      siteName: SITE_NAME,
      images: [
        {
          ...OG_IMAGE,
          alt: title,
        },
      ],
    },
    alternates: {
      canonical: generatePath(locale, path),
      // languages: generateHreflang(path),
      languages: {
        'x-default': `${BASE_URL}${path.startsWith('/') ? path.replace('/', '') : path}`,
        ...generateHreflang(path),
      },
    },
  };
}
