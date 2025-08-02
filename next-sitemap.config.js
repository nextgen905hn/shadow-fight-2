/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://shadowfight2mod.netlify.app', // change this to your domain
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/admin', '/privacy-policy/temp'], // optional
};
