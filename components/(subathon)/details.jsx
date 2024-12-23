import {Card} from '@/components/ui/card'

export function SubathonDetails() {
  return (
    <Card className='bg-white/80 p-5 backdrop-blur-sm md:p-6 dark:bg-black/80'>
      <article className='prose prose-xl max-w-none dark:prose-invert'>
        <h2 className='bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-center text-2xl font-bold text-transparent md:text-4xl'>
          The Details!
        </h2>
        <ol>
          <li>
            First, POINTS! Use these to unlock goals throughout the event. Check the point system
            guide for all the details, including the point structure, current Twitch promotions, and
            more!
          </li>
          <li>
            Next, GOALS! We didn&apos;t hold back this year—take a look at the list and see what
            surprises await. Will this be the year Sway finally gets those Crocs? Stay tuned!
          </li>
          <li>
            Finally, enjoy exclusive incentives along the way, including activities to keep things
            lively and engaging!
          </li>
        </ol>
      </article>
    </Card>
  )
}
