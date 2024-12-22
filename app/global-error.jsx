'use client'
import {useEffect} from 'react'
import {Button} from '@/components/ui/button'

export default function GlobalError({error, reset}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <html>
      <body>
        <div className='mx-auto grid grid-cols-1 place-items-center pt-36'>
          <h2 className='inline-block bg-gradient-to-t from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-[7.5rem] leading-none tracking-tighter text-transparent drop-shadow-2xl sm:text-[13rem] md:text-[17rem] lg:text-[20rem] 2xl:text-[28rem]'>
            Oops!
          </h2>
          <p className='mb-4 text-wrap text-center text-base font-medium leading-none tracking-normal text-gray-700 drop-shadow-xl sm:mb-8 sm:text-xl md:mb-10 md:text-3xl lg:mb-12 lg:text-4xl 2xl:mb-14 2xl:text-5xl dark:text-gray-200'>
            There seems to be something wrong.
          </p>
          <Button variant='shimmer' size='thick' className='text-lg' onClick={() => reset()}>
            Try again
          </Button>
        </div>
      </body>
    </html>
  )
}
