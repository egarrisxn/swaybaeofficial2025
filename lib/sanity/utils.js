export const resolveHref = (documentType, slug) => {
  switch (documentType) {
    case 'home':
      return '/'
    case 'blog':
      return '/blog'
    case 'post':
      return slug ? `/blog/post/${slug}` : undefined
    case 'tag':
      return slug ? `/blog/tag/${slug}` : undefined
    default:
      console.warn('Invalid document type:', documentType)
      return undefined
  }
}

export const mainDocuments = [
  {
    route: '/blog/post/:slug',
    filter: `_type == "post" && slug.current == $slug`,
  },
  {
    route: '/blog/tag/:slug',
    filter: `_type == "tag" && slug.current == $slug`,
  },
]

export const locations = {
  home: {
    message: 'This document is used to render the home page',
    tone: 'positive',
    locations: [{title: 'Home', href: resolveHref('home')}],
  },
  blog: {
    message: 'This document is used to render the blog page',
    tone: 'positive',
    locations: [{title: 'Blog', href: resolveHref('blog')}],
  },
  post: {
    select: {title: 'title', slug: 'slug.current'},
    resolve: (doc) => ({
      locations: [
        {
          title: doc?.title || 'Untitled',
          href: resolveHref('post', doc?.slug),
        },
        {title: 'Home', href: `/`},
        {title: 'Blog', href: `/blog`},
      ],
    }),
  },
  tag: {
    select: {title: 'title', slug: 'slug.current'},
    resolve: (doc) => ({
      locations: [
        {
          title: doc?.title || 'Untitled',
          href: resolveHref('tag', doc?.slug),
        },
        {title: 'Home', href: `/`},
        {title: 'Blog', href: `/blog`},
      ],
    }),
  },
}

export const hrefResolver = ({internalLink}) => {
  return resolveHref(internalLink._type, internalLink.slug?.current)
}
