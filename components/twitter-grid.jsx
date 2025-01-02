'use client'
import {TweetGrid} from '@/components/ui/tweet-grid'
import {tweetGrid} from '@/lib/data'

export function TwitterGrid({}) {
  return (
    <div className='max-w-xl pb-12 md:max-w-4xl'>
      <div className='flex w-full items-center justify-center'>
        <TweetGrid className='w-full' tweets={tweetGrid} columns={2} spacing='lg' />
      </div>
    </div>
  )
}
