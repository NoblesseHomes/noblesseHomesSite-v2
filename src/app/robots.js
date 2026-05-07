export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000/sitemap.xml'
        : 'https://noblessehomes.cz/sitemap.xml',
  };
}
