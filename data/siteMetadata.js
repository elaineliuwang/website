/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Elaine L. Wang',
  author: 'Elaine L. Wang',
  headerTitle: 'Home',
  description: 'welcome to my world.',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://tailwind-nextjs-starter-blog.vercel.app',
  siteRepo: 'https://github.com/elaineliuwang/website',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/smiley.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/smiley.png`,
  mastodon: 'https://mastodon.social/@mastodonuser',
  email: 'address@yoursite.com',
  github: 'https://github.com',
  x: 'https://twitter.com/x',
  // twitter: 'https://twitter.com/Twitter',
  facebook: 'https://facebook.com',
  youtube: 'https://youtube.com',
  linkedin: 'https://www.linkedin.com',
  threads: 'https://www.threads.net',
  instagram: 'https://www.instagram.com',
  // medium: 'https://medium.com',
  // bluesky: 'https://bsky.app/',
  locale: 'en-US',
  // set to true if you want a navbar fixed to the top
  stickyNav: false,
}

module.exports = siteMetadata
