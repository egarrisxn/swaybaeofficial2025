import {aboutCards} from '@/lib/data'

const WhyCard = ({title, content}) => {
  return (
    <div className='mx-auto flex flex-col items-center justify-start gap-4 p-8 text-center leading-relaxed text-[#374151] xl:text-[1.25rem] dark:text-[#d1d5db]'>
      <h2 className='mb-4 font-serif text-2xl font-semibold italic leading-snug text-[#111827] md:mb-3 dark:text-white'>
        {title}
      </h2>
      <p className='px-8'>{content}</p>
    </div>
  )
}

export default function WhyCards() {
  return (
    <section className='min-h-96 w-full py-12'>
      <div className='container mx-auto my-24 px-4 md:px-8 lg:px-16'>
        <div className='p-1'>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-3 md:p-4'>
            {aboutCards.map((card, index) => (
              <WhyCard key={index} title={card.title} content={card.content} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
