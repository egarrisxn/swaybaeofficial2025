import imageUrlBuilder from '@sanity/image-url'
import {client} from './client'

const imageBuilder = imageUrlBuilder(client)

export function urlFor(source) {
  return imageBuilder.image(source)
}

export function resolveHref(documentType, slug) {
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

// export function resolveOpenGraphImage(image, width = 1200, height = 627) {
//   if (!image) return
//   const url = urlForImage(image)?.width(1200).height(627).fit('crop').url()
//   if (!url) return
//   return {url, alt: image?.alt, width, height}
// }

// export function linkResolver(link) {
//   if (!link) return null

//   if (!link.linkType && link.href) {
//     link.linkType = 'href'
//   }

//   switch (link.linkType) {
//     case 'href':
//       return link.href || null
//     case 'page':
//       if (link?.page) {
//         return `/${link.page}`
//       }
//       return null
//     case 'post':
//       if (link?.post) {
//         return `/posts/${link.post}`
//       }
//       return null
//     default:
//       return null
//   }
// }
