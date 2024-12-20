import Link from 'next/link'
import Image from 'next/image'
import {Button} from '@/components/ui/button'
import {CustomButton} from '@/components/custom-button'

export default function AboutSection() {
  return (
    <section className='border-4 border-white pt-12 dark:border-black'>
      <div className='container mx-auto max-w-7xl border-2 px-4'>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
          {/* Text Section */}
          <article className='flex flex-col items-start justify-center gap-3 border-2 p-4 md:mb-24 md:gap-6 lg:mb-0'>
            <h6 className='text-xl font-semibold uppercase tracking-wide text-gray-700 dark:text-neutral-100'>
              Heya!
            </h6>
            <h2 className='bg-gradient-to-t from-neutral-700 to-neutral-800 bg-clip-text text-7xl font-extrabold leading-tight tracking-tighter text-transparent md:text-8xl xl:mt-2 xl:text-9xl dark:from-stone-200 dark:to-neutral-200'>
              I&apos;m Sway!
            </h2>
            <p className='max-w-xl pb-3 font-light leading-relaxed text-gray-600 md:text-lg lg:text-xl'>
              I&apos;m a Full-Time Content Creator, currently partnered with Twitch and YouTube,
              streaming and releasing videos throughout the week. I create family-friendly
              entertainment centered around the concepts of positive mental attitude in gaming with
              the mantra of leaving someone&apos;s day better than I found it.
            </p>
            <Button asChild variant='bubble' size='lg'>
              <Link href='/about'>Learn more!</Link>
            </Button>
            <CustomButton text={'Learn More!'} />
          </article>

          {/* Image Section */}
          <aside className='relative flex justify-center border-2 md:justify-end'>
            <Image
              src='/images/aboutpicture.png'
              alt='A cutout photo of Sway'
              width={850}
              height={1400}
              className='h-auto max-w-[75%] md:max-w-full'
            />
          </aside>
        </div>
      </div>
    </section>
  )
}
