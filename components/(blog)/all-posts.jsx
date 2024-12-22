'use client'
import {useState} from 'react'
import {Button} from '@/components/ui/button'
import {PostCard} from './post-card'

export default function AllPosts({posts}) {
  const featuredPosts = posts.filter((post) => post.featured)

  const articlesShown = 1
  const [loadMore, setLoadMore] = useState(articlesShown)

  const showMoreArticles = () => {
    setLoadMore(loadMore + 2)
  }

  return (
    <>
      <div className='grid grid-cols-1 gap-12 lg:grid-cols-2'>
        <div>
          <h2 className='pb-6 font-medium leading-relaxed tracking-wide'>Featured</h2>
          {featuredPosts.length > 0 && (
            <section className='grid grid-cols-1'>
              {featuredPosts.map((post) => (
                <PostCard key={post._id} post={post} noTagColor={true} isFeatured />
              ))}
            </section>
          )}
        </div>
        <hr className='block lg:hidden' />
        <div>
          <h2 className='pb-6 font-medium leading-relaxed tracking-wide'>Recent</h2>
          <section className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
            {posts.slice(0, loadMore).map((post, index) => (
              <div
                key={post._id}
                className={`translate-y-2 animate-fizzle opacity-0 transition-opacity duration-300 ease-in-out`}
                style={{animationDelay: `${index * 100}ms`}}
              >
                <PostCard post={post} noTagColor={true} />
              </div>
            ))}
          </section>
          <div className='mt-16 flex justify-center p-4'>
            {posts.length > loadMore ? (
              <Button variant='shimmer' size='xs' type='button' onClick={showMoreArticles}>
                Load more posts.
              </Button>
            ) : (
              <p className='text-center text-gray-500'>No more posts.</p>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
