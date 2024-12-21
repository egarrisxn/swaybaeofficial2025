import Link from 'next/link'
import {Button} from '@/components/ui/button'

export const metadata = {
  title: 'Page Not Found',
}

export default function NotFound() {
  return (
    <div className='mx-auto grid grid-cols-1 place-items-center pt-36'>
      <h2 className='inline-block bg-gradient-to-t from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-[11rem] leading-none tracking-tighter text-transparent drop-shadow-2xl sm:text-[16rem] md:text-[20rem] xl:text-[24rem] 2xl:text-[30rem]'>
        404
      </h2>
      <p className='mb-16 text-wrap text-center text-[0.9rem] text-base font-medium leading-none tracking-normal text-gray-600 drop-shadow-xl sm:text-lg md:text-2xl xl:text-3xl 2xl:text-4xl dark:text-gray-200'>
        <span className='text-blue-400'>Oops,</span> this page must be lost or something.
      </p>
      <Button variant='pretty' size='fat' className='text-lg' asChild>
        <Link href='/'>Back Home</Link>
      </Button>
    </div>
  )
}
