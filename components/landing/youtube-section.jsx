import {Button} from '@/components/ui/button'
import {VideoPlayer} from '@/components/video-player'

export default function YouTubeSection() {
  return (
    <section className='py-12'>
      <div className='container mx-auto my-24 max-w-2xl px-4 lg:max-w-7xl xl:px-0'>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 2xl:gap-16'>
          {/* Video Section */}
          <aside className='flex w-full items-center justify-center py-4 sm:px-4 lg:mt-1 lg:items-start lg:px-2 xl:px-4'>
            <div className='relative h-fit w-full max-w-xl overflow-hidden'>
              <VideoPlayer />
            </div>
          </aside>
          {/* Text Section */}
          <article className='flex w-full flex-col gap-3 p-4 sm:px-12 lg:px-2 xl:gap-5 xl:px-4'>
            <h6 className='pb-1 font-semibold uppercase tracking-wide text-gray-700 dark:text-neutral-100'>
              Watch and learn
            </h6>
            <h2 className='bg-gradient-to-t from-neutral-600 via-neutral-700 to-neutral-800 bg-clip-text pb-3 font-serif text-4xl font-bold text-transparent drop-shadow-[0_0.5px_0.5px_rgba(0,0,0,0.8)] lg:text-5xl xl:text-6xl dark:from-stone-200 dark:to-neutral-200'>
              Get inspired by my YouTube channel!
            </h2>
            <p className='max-w-xl pb-3 font-light leading-relaxed text-gray-700 lg:text-lg xl:text-xl dark:text-gray-300'>
              I create family-friendly entertainment centered around the concepts of positive mental
              attitude in gaming with the mantra of leaving someone&apos;s day better than I found
              it. I found it. I found it. I found it. I found it.
            </p>
            <div className=''>
              <Button asChild variant='main' size='lg'>
                <a
                  href='https://www.youtube.com/swaybaetv'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  Watch Now
                </a>
              </Button>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
