import {Timeline, eventData} from '@/components/about/timeline'

export default function AboutTimeline() {
  return (
    <div className='py-12'>
      <section className='container mx-auto my-24 flex justify-center p-4'>
        <div className='p-1'>
          <div className='mt-4 font-semibold sm:text-lg md:text-2xl lg:text-lg xl:text-3xl'>
            <h2 className='mb-4 font-serif text-[1.5rem] font-bold leading-snug text-[#111827] xl:text-[1.9rem] xl:leading-none dark:text-white'>
              A visual roadmap of my journey.
            </h2>
          </div>
          <Timeline eventData={eventData} />
        </div>
      </section>
    </div>
  )
}
