import TierList from '@/components/community/tier-list'
import BaeSquadScrollText from '@/components/community/baesquad-text-scroll'

export const metadata = {
  title: 'Community Page',
}

export default function CommunityPage() {
  return (
    <section className='w-full pt-12'>
      <div className='container mx-auto mt-24 max-w-2xl px-4 lg:max-w-7xl xl:px-0'>
        <div className='mx-auto grid max-w-[65ch] grid-cols-1 items-center leading-relaxed xl:max-w-[80ch]'>
          <h6 className='pb-1 font-semibold uppercase tracking-wide text-gray-700 dark:text-neutral-100'>
            Welcome to
          </h6>
          {/* <h2 className='mb-4 font-serif text-[1.5rem] font-bold leading-snug text-[#111827] xl:text-[2.0rem] xl:leading-none dark:text-white'> */}
          <h2 className='bg-gradient-to-t from-neutral-600 via-neutral-700 to-neutral-800 bg-clip-text pb-5 font-serif text-4xl font-bold tracking-tight text-transparent drop-shadow-[0_0.5px_0.5px_rgba(0,0,0,0.8)] lg:text-5xl xl:text-6xl dark:from-stone-200 dark:to-neutral-200'>
            The Bae Squad!
          </h2>
          <p className='max-w-5xl leading-relaxed text-[#374151] xl:text-[1.25rem] dark:text-[#d1d5db]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <TierList />
        </div>
      </div>
      <BaeSquadScrollText />
    </section>
  )
}
