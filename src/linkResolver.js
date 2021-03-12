export const linkResolver = (doc) => {
  // if (doc.type === 'blog_post') return `/blog/${doc.uid}`;
  // if (doc.type === 'blog_home') return '/blog';
  if (doc.type === 'page') return `/${doc.uid}`;
  return '/';
};
