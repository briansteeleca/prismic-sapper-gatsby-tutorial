import Prismic from 'prismic-javascript';

export const apiEndpoint = "https://my-new-prismic-repo.prismic.io/api/v2";

export const Client = Prismic.client(apiEndpoint);

export const linkResolver = (doc) => {
  // if (doc.type === 'blog_post') return `/blog/${doc.uid}`;
  // if (doc.type === 'blog_home') return '/blog';
  if (doc.type === 'page') return `/${doc.uid}`;
  return '/';
};
