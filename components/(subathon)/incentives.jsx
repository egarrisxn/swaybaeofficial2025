import {Card} from '@/components/ui/card'
import {Dumbbell, Music, Trophy} from 'lucide-react'

export function Incentives() {
  return (
    <Card className='space-y-6 bg-white/80 p-6 backdrop-blur-sm dark:bg-black/80'>
      <h2 className='text-2xl font-bold'>Extra Incentives</h2>

      <div className='grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6'>
        <Card className='space-y-3 p-3 md:p-4'>
          <div className='flex items-center gap-2'>
            <Dumbbell className='size-4 text-purple-600 md:size-5' />
            <h3 className='font-semibold'>Fitness Goals</h3>
          </div>
          <p className='text-sm text-muted-foreground'>
            Every <b>5,000 points</b>, Sway will spin the <i>infamous</i> fitness wheel for
            exercises! The wheel includes 5 crunches, 5 pushups, 5 bicep curls, 5 sqauts, 5 burpees,
            and 1 minute planks.
          </p>
        </Card>

        <Card className='space-y-3 p-3 md:p-4'>
          <div className='flex items-center gap-2'>
            <Music className='size-4 text-purple-600 md:size-5' />
            <h3 className='font-semibold'>Song Requests</h3>
          </div>
          <p className='text-sm text-muted-foreground'>
            Every <b>20,000 points</b> unlocks a Song Request power hour!{' '}
            <i>
              *Note: Song requests must be family-friendly and will be disabled during Sway at Nite,
              if it&apos;s reached.*
            </i>
          </p>
        </Card>

        <Card className='space-y-3 p-3 md:p-4'>
          <div className='flex items-center gap-2'>
            <Trophy className='size-4 text-purple-600 md:size-5' />
            <h3 className='font-semibold'>Top Contributors</h3>
          </div>
          <p className='text-sm text-muted-foreground'>
            The <b>Top 5 contributors</b> get a personalized alert for any Twitch event(i.e. subs,
            gifted subs, bits), along with an on-screen arrival action for their first message sent
            in stream!
          </p>
        </Card>
      </div>
    </Card>
  )
}
