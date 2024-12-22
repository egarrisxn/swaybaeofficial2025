import Link from 'next/link'
import Image from 'next/image'
import {Button} from '@/components/ui/button'

export default function AboutSection() {
  return (
    <section className='border-4 border-white pt-12 dark:border-black'>
      <div className='container mx-auto mt-12 max-w-6xl px-4 xl:px-0'>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:gap-0'>
          {/* Text Section */}
          <article className='mx-auto flex flex-col gap-3 p-4 md:mb-24 md:gap-5 md:pt-24 lg:mb-0 xl:pt-32'>
            <h6 className='text-2xl font-semibold uppercase tracking-widest text-gray-700 dark:text-neutral-100'>
              Heya!
            </h6>
            <h2 className='bg-gradient-to-t from-neutral-600 via-neutral-700 to-neutral-800 bg-clip-text pb-4 font-serif text-7xl font-black tracking-tight text-transparent drop-shadow-[0_0.5px_0.5px_rgba(0,0,0,0.8)] md:text-8xl xl:text-9xl dark:from-stone-200 dark:to-neutral-200'>
              I&apos;m Sway.
            </h2>
            <p className='max-w-lg pb-3 font-light text-gray-700 md:text-lg lg:text-xl 2xl:text-2xl dark:text-gray-300'>
              I&apos;m a Full-Time Content Creator, currently partnered with Twitch and YouTube,
              streaming and releasing videos throughout the week. I create family-friendly
              entertainment centered around the concepts of positive mental attitude in gaming with
              the mantra of leaving someone&apos;s day better than I found it.
            </p>
            <Button asChild variant='threedee' size='thick'>
              <Link href='/about'>Learn more!</Link>
            </Button>
          </article>

          {/* Image Section */}
          <aside className='flex justify-center md:justify-end xl:px-4'>
            <Image
              src='/images/aboutpicture.png'
              alt='A cutout photo of Sway'
              width={500}
              height={900}
              className='h-auto max-w-[75%] md:max-w-full'
            />
          </aside>
        </div>
      </div>
    </section>
  )
}
