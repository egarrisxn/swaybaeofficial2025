import {Button} from '@/components/ui/button'
import {VideoPlayer} from '@/components/video-player'
import {SwaysButton} from '@/components/sways-button'

export default function YouTubeSection() {
  return (
    <section className='border-4'>
      <div className='container mx-auto my-24 grid max-w-2xl grid-cols-1 justify-center gap-4 p-4 lg:max-w-7xl lg:grid-cols-2 xl:gap-12'>
        <aside className='flex flex-col justify-center px-4 lg:px-8 xl:px-4'>
          <div className='rounded-lg border-2 shadow-lg'>
            <VideoPlayer />
          </div>
        </aside>
        <article className='flex flex-col items-start justify-center gap-4 px-4 lg:px-8 xl:px-4'>
          <span className='uppercase leading-loose tracking-wider xl:text-lg'>
            Watch and learn.
          </span>
          <h2 className='font-sansita mt-1 text-3xl italic lg:mt-2 lg:text-5xl xl:text-6xl'>
            Get inspired by my youtube channel!
          </h2>
          <p className='my-4 max-w-xl font-light leading-loose tracking-wider md:text-lg xl:text-xl'>
            I create family-friendly entertainment centered around the concepts of positive mental
            attitude in gaming with the mantra of leaving someone&apos;s day better than I found it.
          </p>
          <Button asChild variant='bubble' size='lg' className='mb-4'>
            <a href='https://www.youtube.com/swaybaetv' rel='noopener noreferrer' target='_blank'>
              Watch Now
            </a>
          </Button>
          <SwaysButton text={'Watch Now'} />
        </article>
      </div>
    </section>
  )
}
