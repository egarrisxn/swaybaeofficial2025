import Link from 'next/link'
import {ArrowLeft} from '@/components/(icons)/arrow-left'

export function BackHome() {
  return (
    <Link href='/'>
      <button className='group flex flex-row items-center justify-center gap-1'>
        <ArrowLeft
          width={16}
          height={16}
          className='transition-all duration-300 ease-out group-hover:-translate-x-1 group-hover:scale-105'
        />
        <p className='bg-gradient-to-tr from-primary/90 via-primary/70 to-primary/50 bg-clip-text font-semibold uppercase tracking-tight text-transparent'>
          Back Home
        </p>
      </button>
    </Link>
  )
}
