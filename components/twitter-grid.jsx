'use client'
import {TweetGrid} from '@/components/ui/tweet-grid'
import {tweets} from '@/lib/data'

export default function TwitterGrid({}) {
  return (
    <div className='max-w-md pb-12 md:max-w-4xl'>
      <div className='flex w-full items-center justify-center'>
        <TweetGrid className='w-80 md:w-full' tweets={tweets} columns={2} spacing='lg' />
      </div>
    </div>
  )
}
