'use client'
import {useState} from 'react'
import PostCard from './post-card'
import {Button} from '@/components/ui/button'

export default function AllPosts({posts}) {
  const featuredPosts = posts.filter((post) => post.featured)
  const remainingPosts = posts.filter((post) => !post.featured)

  const articlesShown = 3
  const [loadMore, setLoadMore] = useState(articlesShown)

  const showMoreArticles = () => {
    setLoadMore(loadMore + 3)
  }

  return (
    <>
      <h2 className='mb-2 ml-1 text-xl font-bold'>Featured Posts</h2>
      {featuredPosts.length > 0 && (
        <section className='mt-8 grid grid-cols-1 gap-16 pb-16'>
          {featuredPosts.map((post) => (
            <PostCard key={post._id} post={post} isFeatured />
          ))}
        </section>
      )}
      <hr className='border-gray-fade mb-8 mt-4 w-full rounded-lg border' />
      <h2 className='mb-4 ml-1 text-xl font-bold'>Latest Posts</h2>
      <section className='mt-8 grid grid-cols-1 gap-16 pb-12 md:grid-cols-2 xl:grid-cols-3'>
        {remainingPosts.slice(0, loadMore).map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </section>
      {remainingPosts.length > loadMore && (
        <div className='flex justify-center pb-12 pt-4'>
          <Button variant='fun' size='md' type='button' onClick={showMoreArticles}>
            Load more posts
          </Button>
        </div>
      )}
    </>
  )
}
