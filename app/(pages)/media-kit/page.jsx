import Image from 'next/image'

export const metadata = {
  title: 'Media Kit Page',
}

export default function MediaKitPage() {
  return (
    <div className='min-h-screen w-full py-12'>
      <div className='container mx-auto my-24 max-w-2xl px-4 lg:max-w-7xl xl:px-0'>
        <div className='mx-auto grid max-w-[65ch] grid-cols-1 items-center leading-relaxed xl:max-w-[80ch]'>
          <h2 className='mb-4 font-serif text-[1.5rem] font-bold leading-snug text-[#111827] xl:text-[2.0rem] xl:leading-none dark:text-white'>
            Media Kit
          </h2>
          <h5>Official Bio</h5>
          <p className='my-5 max-w-5xl leading-relaxed text-[#374151] xl:text-[1.25rem] dark:text-[#d1d5db]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim ,{' '}
            <a
              href='#'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-500 underline'
            >
              <em>Random Link Example</em>
            </a>{' '}
            id est laborum.
          </p>

          <h5>Approved Photos</h5>
          <p>
            You are free to use these photos digitally as long as you send me a link at{' '}
            <a href='mailto:sway.bay9000@gmail.com' className='text-blue-500 underline'>
              sway.bay9000@gmail.com
            </a>{' '}
            and let me know where they are being used.
          </p>

          <div className='mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
            <div>
              <a href='#' target='_blank' rel='noopener noreferrer' className='inline-block'>
                <Image
                  src='/grid/1.jpg'
                  width={300}
                  height={450}
                  alt='alt 1'
                  className='rounded-lg border-2'
                />
              </a>
              <h5 className='mt-1 text-sm'>Description maybe?</h5>
            </div>

            <div>
              <a href='#' target='_blank' rel='noopener noreferrer' className='inline-block'>
                <Image
                  src='/grid/2.jpg'
                  width={300}
                  height={450}
                  alt='Alt 2'
                  className='rounded-lg border-2'
                />
              </a>
              <h5 className='mt-1 text-sm'>Description maybe?</h5>
            </div>

            <div>
              <a href='#' target='_blank' rel='noopener noreferrer' className='inline-block'>
                <Image
                  src='/grid/5.jpg'
                  width={300}
                  height={450}
                  alt='Alt 3'
                  className='rounded-lg border-2'
                />
              </a>
              <h5 className='mt-1 text-sm'>Description maybe?</h5>
            </div>

            <div>
              <a href='#' target='_blank' rel='noopener noreferrer' className='inline-block'>
                <Image
                  src='/grid/6.jpg'
                  width={300}
                  height={450}
                  alt='Alt 4'
                  className='rounded-lg border-2'
                />
              </a>
              <h5 className='mt-1 text-sm'>Description maybe?</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
