/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Elaine L. Wang',
  author: 'Elaine L. Wang',
  headerTitle: 'Home',
  description: 'welcome to my world.',
  language: 'en-us',
  theme: 'system',
  siteUrl: 'https://www.elaineliuwang.com',
  siteRepo: 'https://github.com/elaineliuwang/website',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/linkedin-pfp-sq.jpeg`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/linkedin-pfp-sq.jpeg`,
  email: 'elainelw@mit.edu',
  github: 'https://github.com/elaineliuwang',
  x: 'https://x.com/elaineliuwang',
  youtube: 'https://www.youtube.com/@elaineliuwang',
  linkedin: 'https://www.linkedin.com/in/elaine-liu-wang/',
  instagram: 'https://www.instagram.com/elaineliuwang/',
  locale: 'en-US',
  stickyNav: false,
}

module.exports = siteMetadata
