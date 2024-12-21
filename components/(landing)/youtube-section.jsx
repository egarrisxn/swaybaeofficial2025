import {Button} from '@/components/ui/button'
import {VideoPlayer} from '@/components/video-player'

export default function YouTubeSection() {
  return (
    <section className='border-4 border-white py-12 dark:border-black'>
      <div className='container mx-auto my-24 max-w-2xl px-4 lg:max-w-7xl xl:px-0'>
        <div className='grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12 2xl:gap-16'>
          {/* Video Section */}
          <aside className='flex w-full items-center justify-center py-2 lg:items-start lg:py-4'>
            <div className='relative h-fit w-full max-w-xl overflow-hidden rounded-lg shadow-lg'>
              <VideoPlayer />
            </div>
          </aside>

          {/* Text Section */}
          <article className='flex w-full flex-col gap-3 p-4 sm:px-12 lg:gap-6 lg:px-4'>
            <h6 className='font-semibold uppercase tracking-wide text-gray-700 dark:text-neutral-100'>
              Watch and learn
            </h6>
            <h2 className='bg-gradient-to-t from-neutral-700 to-neutral-800 bg-clip-text pb-3 text-4xl font-semibold text-transparent md:text-5xl lg:text-6xl xl:mt-2 dark:from-stone-200 dark:to-neutral-200'>
              Get inspired by my YouTube channel!
            </h2>
            <p className='leading-relaxedtext-gray-600 max-w-xl pb-3 font-light md:text-lg lg:text-xl dark:text-gray-400'>
              I create family-friendly entertainment centered around the concepts of positive mental
              attitude in gaming with the mantra of leaving someone&apos;s day better than I found
              it. I found it. I found it. I found it. I found it.
            </p>
            <Button asChild variant='bubble' size='lg'>
              <a href='https://www.youtube.com/swaybaetv' rel='noopener noreferrer' target='_blank'>
                Watch Now
              </a>
            </Button>
          </article>
        </div>
      </div>
    </section>
  )
}
