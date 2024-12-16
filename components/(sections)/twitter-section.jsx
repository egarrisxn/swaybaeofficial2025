import {TwitterCard} from '@/components/twitter-card'

export default function TwitterSection() {
  return (
    <section className='border-4'>
      <div className='container mx-auto my-24 grid max-w-2xl grid-cols-1 place-items-center gap-8 p-4 lg:max-w-7xl'>
        <div className='flex flex-col gap-4 px-4 lg:px-8 xl:px-4'>
          <span className='uppercase leading-loose tracking-wider xl:text-lg'>
            Keeping it social.
          </span>
          <h2 className='mt-1 text-3xl italic lg:mt-2 lg:text-5xl xl:text-6xl'>
            Follow me on my adventures!
          </h2>
          <p className='my-4 font-light leading-loose tracking-wider md:text-lg xl:text-xl'>
            I create family-friendly entertainment centered around the concepts of positive mental
            attitude in gaming with the mantra of leaving someone&apos;s day better than I found it.
          </p>
        </div>
        <div className='flex flex-col gap-4 p-2 lg:flex-row'>
          <TwitterCard id='1845907938369511535' />
          <TwitterCard id='1843019037678440841' />
          <TwitterCard id='1837740206122061936' />
        </div>
      </div>
    </section>
  )
}
