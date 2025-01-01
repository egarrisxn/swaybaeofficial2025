import Link from 'next/link'
import {Button} from '@/components/ui/button'

export function ComingSoon() {
  return (
    <section className='flex min-h-screen flex-col items-center justify-center gap-6'>
      <header className='bg-gradient-to-t from-yellow-400 via-pink-500 to-purple-500 bg-clip-text px-2 text-center font-serif uppercase text-transparent drop-shadow-2xl'>
        <h2 className='text-[4.5rem] font-light leading-none sm:text-[8rem] md:text-[9.5rem] lg:text-[13rem] xl:text-[14rem] 2xl:text-[15rem]'>
          Coming
        </h2>
        <h2 className='text-[6.5rem] font-bold leading-none sm:text-[11rem] md:text-[13rem] lg:text-[18rem] xl:text-[19rem] 2xl:text-[20rem]'>
          Soon
        </h2>
      </header>
      <Button asChild size='dynamic' variant='shimmer'>
        <Link href='/'>
          <span className='text-sm uppercase tracking-tight'>Home Page</span>
        </Link>
      </Button>
    </section>
  )
}
