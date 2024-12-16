import Link from 'next/link'
import Image from 'next/image'
import {Button} from '@/components/ui/button'
import {SwaysButton} from '@/components/sways-button'

export default function AboutSection() {
  return (
    <section className='border-4'>
      <div className='container mx-auto grid max-w-2xl grid-cols-1 gap-4 px-4 pt-4 lg:max-w-7xl lg:grid-cols-2 xl:gap-12'>
        <article className='flex flex-col items-start justify-center gap-4 px-4 lg:px-8 xl:px-4'>
          <span className='text-lg font-semibold uppercase leading-loose tracking-wider lg:text-xl xl:text-2xl'>
            Heya!
          </span>
          <h2 className='mt-1 text-7xl font-extrabold italic sm:mt-0 sm:text-8xl xl:mt-2 xl:text-9xl'>
            I&apos;m Sway!
          </h2>
          <p className='my-4 max-w-xl font-light leading-loose tracking-wider lg:text-lg xl:text-xl'>
            I&apos;m a Full-Time Content Creator, currently partnered with Twitch and YouTube,
            streaming and releasing videos throughout the week. I create family-friendly
            entertainment centered around the concepts of positive mental attitude in gaming with
            the mantra of leaving someone&apos;s day better than I found it.
          </p>
          <Button asChild variant='bubble' size='lg' className='mb-4'>
            <Link href='/about'>Learn more!</Link>
          </Button>
          <SwaysButton text={'Learn More!'} />
        </article>
        <aside className='z-30 mx-auto flex max-w-xl px-4 lg:relative lg:inset-[88%,0%,auto] lg:mx-0 lg:mt-[-9rem] lg:block lg:px-8 xl:mt-[-16rem] xl:px-4'>
          <Image
            src='/images/aboutpicture.png'
            alt='A cutout photo of Sway'
            width={600}
            height={1200}
            priority={true}
            className='mb-0 inline-block max-w-full overflow-clip'
          />
        </aside>
      </div>
    </section>
  )
}
