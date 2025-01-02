import {personalInfo} from '@/lib/data'

export default function PersonallInfo() {
  return (
    <section className='py-12'>
      <div className='container mx-auto my-24 max-w-4xl px-4 md:px-8 lg:px-0 xl:max-w-5xl 2xl:max-w-7xl'>
        <div className='p-1'>
          <div className='mt-4 font-semibold sm:text-lg md:text-2xl lg:text-lg xl:text-3xl'>
            <h2 className='mb-4 font-serif text-[1.5rem] font-bold leading-snug text-[#111827] xl:text-[1.9rem] xl:leading-none dark:text-white'>
              What I do OTHER than create content!
            </h2>
          </div>
          <div>
            {personalInfo.map((text, index) => (
              <p
                key={index}
                className='my-5 max-w-5xl leading-relaxed text-[#374151] xl:text-[1.25rem] dark:text-[#d1d5db]'
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
