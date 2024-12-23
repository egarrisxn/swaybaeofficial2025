'use client'
import {AlertCircle} from 'lucide-react'
import {Card} from '@/components/ui/card'

export function Promotions() {
  return (
    <div className='space-y-4'>
      <div className='space-y-3 rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20'>
        <h4 className='flex items-center gap-2 font-semibold'>
          <AlertCircle className='h-4 w-4 text-purple-600' />
          Current Twitch Promotions
        </h4>
        <ul className='list-inside list-disc space-y-1 text-sm'>
          <li>25% off new 1-month subs</li>
          <li>25% off new 3-month subs</li>
          <li>30% off new 6-month subs</li>
        </ul>
      </div>

      <Card className='space-y-3 p-4'>
        <h4 className='font-semibold'>Bonus Gift Subs Program</h4>
        <p className='text-sm text-muted-foreground'>
          For every five gift subs purchased for a channel, Valorant will add one bonus gift sub.
          Additional points will be added based on the tier and number of gifted subs from Twitch.
        </p>
        <div className='rounded-md bg-muted p-3 text-sm'>
          <strong>Example:</strong> 5 Tier 1 gifted subs (3,000 points) + 1 bonus gifted sub (600
          points) + 100 bonus points = 3,700 total points
        </div>
        <a
          href='https://blog.twitch.tv/en/2024/11/21/bonus-round-2024/'
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex items-center gap-1 text-sm text-purple-600 transition-colors hover:text-purple-700'
        >
          Learn more about the End-of-Year Bonus Round
        </a>
      </Card>
    </div>
  )
}
