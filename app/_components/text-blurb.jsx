export function TextBlurb({header = '', subheader = ''}) {
  return (
    <>
      <h2 className='mb-4 mt-6 font-serif text-[1.5rem] font-black leading-snug text-[#111827] xl:mt-8 xl:text-[2rem] xl:leading-none dark:text-white'>
        {header}
      </h2>
      <p className='mb-6 mt-5 max-w-5xl leading-relaxed text-[#374151] xl:text-[1.25rem] dark:text-[#d1d5db]'>
        {subheader}
      </p>
    </>
  )
}
