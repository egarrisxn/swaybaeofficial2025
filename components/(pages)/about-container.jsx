import Image from 'next/image'
import {BrandCard} from '@/components/brand-card'

const brands = [
  {img: '/brands/supergirl.png', href: 'https://supergirlgamerpro.com'},
  {img: '/brands/blizzard.png', href: 'https://blizzard.com'},
  {img: '/brands/hellofresh.png', href: 'https://hellofresh.com'},
  {img: '/brands/twitch.png', href: 'https://twitch.tv'},
  {img: '/brands/1000dreams.png', href: 'https://1000dreamsfund.org'},
  {img: '/brands/youtube.png', href: 'https://youtube.com'},
  {img: '/brands/gcx.png', href: 'https://gcxevent.com'},
  {img: '/brands/dreamhack.png', href: 'https://dreamhack.com'},
]

export function AboutContainer() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center py-12'>
      <div className='container prose mx-auto my-24 max-w-7xl space-y-2 border-2 px-4'>
        {/* Text & Image Section */}
        <section className='grid grid-cols-1 gap-6 md:grid-cols-2'>
          <article className='prose border-2'>
            <h1>So Who Am I?</h1>
            <h2>I&apos;m Sway!</h2>
            <p>
              I&apos;m a Full-Time Content Creator, currently partnered with Twitch and YouTube,
              streaming and releasing videos throughout the week.
            </p>
            <p>
              <span className='font-semibold'>I create</span> family-friendly entertainment centered
              around the concepts of positive mental attitude in gaming with the mantra of leaving
              someone&apos;s day better than I found it. My favorite part of streaming is the
              amazing community. You can find our Discord as you explore the website, but it is a
              very inclusive and supportive community that we have cultivated and a great place to
              connect outside of streams!
            </p>
            <p>
              <span className='font-semibold'>In addition,</span> I am primarily a Hearthstone
              streamer, with a focus on Battlegrounds. I also enjoy Strategy games in general,
              Survival games, Indie games, Simulator games, Roguelike games, Platformers, and many
              more!
            </p>
            <p>
              <span className='font-semibold'>Did I ever</span> imagine this would be my lifestyle,
              even five years ago? Nope. Do I love it? Entirely!
            </p>
            <p>
              <span className='font-semibold'>If you&apos;d like</span> to work with me, I&apos;d
              love to hear from you! You can use the contact form in the business inquiries section
              below! As I often say, thank you for being a part of my journey, and allowing me to be
              a part of yours!
            </p>
          </article>

          <aside className='flex justify-center border-2 md:justify-end'>
            <Image
              src='/grid/1.jpg'
              alt='A cutout photo of Sway'
              width={500}
              height={750}
              className='h-fit max-w-[75%] md:max-w-full'
            />
          </aside>
        </section>
        {/* Brands Section */}
        <section className='border-2 bg-neutral-200/50 px-4 dark:bg-background'>
          <div className='flex flex-row'>
            {brands.map((brand) => (
              <BrandCard key={brand.img} {...brand} />
            ))}
          </div>
        </section>
        {/* Bullets Section */}
        <section className='border-2 px-4'>
          <div className='mt-4 font-semibold sm:text-lg md:text-2xl lg:text-lg xl:text-3xl'>
            <p className='leading-6 tracking-tight sm:leading-7 lg:leading-6 xl:leading-7'>
              A few notable accolades include:
            </p>
          </div>
          <div className='mt-6 grid grid-cols-1 gap-y-6 lg:mt-8 lg:grid-cols-2 lg:grid-rows-3 lg:gap-x-5 lg:gap-y-5 xl:mt-10 xl:grid-cols-3 xl:grid-rows-2'>
            <p className='leading-6 transition-all md:leading-7 lg:rounded-lg lg:p-3 lg:leading-6 lg:shadow xl:p-5 xl:leading-7'>
              <span className='text-primary'>&#9864; </span> 3rd place in Blizzard&apos;s
              Hearthstone Battle of the Boars Tournament.{' '}
              <span className='font-medium'>(May 2021)</span>
            </p>
            <p className='leading-6 transition-all md:leading-7 lg:rounded-lg lg:p-3 lg:leading-6 lg:shadow xl:p-5 xl:leading-7'>
              <span className='text-primary'>&#9864; </span> Casting the Gaming Stadium Hearthstone
              Tournament. <span className='font-medium'>(June 2021)</span>
            </p>
            <p className='leading-6 transition-all md:leading-7 lg:rounded-lg lg:p-3 lg:leading-6 lg:shadow xl:p-5 xl:leading-7'>
              <span className='text-primary'>&#9864; </span> Casting and Hosting multiple Dreamhack
              Community Clash tournaments. <span className='font-medium'>(2021-2022)</span>
            </p>
            <p className='leading-6 transition-all md:leading-7 lg:rounded-lg lg:p-3 lg:leading-6 lg:shadow xl:p-5 xl:leading-7'>
              <span className='text-primary'>&#9864; </span> Casting 4 series of Super Girl Gamer
              Pro Hearthstone Tournaments. <span className='font-medium'>(2021-2023)</span>
            </p>
            <p className='leading-6 transition-all md:leading-7 lg:rounded-lg lg:p-3 lg:leading-6 lg:shadow xl:p-5 xl:leading-7'>
              <span className='text-primary'>&#9864; </span> Multiple Battle.net Launcher Feature
              events, including featured streams and curated YouTube videos just for Hearthstone.
            </p>
            <p className='leading-6 transition-all md:leading-7 lg:rounded-lg lg:p-3 lg:leading-6 lg:shadow xl:p-5 xl:leading-7'>
              <span className='text-primary'>&#9864; </span> Producing, hosting, and casting one of
              the earliest AND largest grassroots tournaments for Hearthstone Battlegrounds, with
              close to 100 participants!
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
