import Prismic from 'prismic-javascript';
require('dotenv').config();

export const apiEndpoint = process.env.PRISMIC_ENDPOINT;

export const Client = Prismic.client(apiEndpoint);

export const linkResolver = (doc) => {
  // if (doc.type === 'blog_post') return `/blog/${doc.uid}`;
  // if (doc.type === 'blog_home') return '/blog';
  if (doc.type === 'page') return `/${doc.uid}`;
  return '/';
};
