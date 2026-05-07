const PAGES = ['/', '/sprava', '/pronajem', '/spoluprace', '/kontakt'];

const LANGUAGES = (process.env.SUPPORTED_LANGUAGE || 'cs')
  .split(',')
  .map((lang) => lang.trim())
  .filter(Boolean);

const RAW_BASE_URL =
  process.env.NODE_ENV === 'development' ? process.env.BASE_URL_DEV : process.env.BASE_URL_PROD;

const BASE_URL = (RAW_BASE_URL || 'http://localhost:3000').replace(/\/+$/, '');

function generatePath(page) {
  const obj = {};

  LANGUAGES.forEach((lang) => {
    obj[lang] = lang === 'cs' ? `${BASE_URL}${page}` : `${BASE_URL}/${lang}${page}`;
  });

  return obj;
}

export default function sitemap() {
  return PAGES.map((page) => ({
    url: `${BASE_URL}${page}`,
    alternates: {
      languages: generatePath(page),
    },
  }));
}
