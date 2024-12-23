import Link from 'next/link'
import {ArrowLeft} from 'lucide-react'

export function BackHome() {
  return (
    <button>
      <Link href='/' className='group flex flex-row items-center justify-center gap-1'>
        <ArrowLeft
          size={16}
          className='transition-all duration-300 ease-out group-hover:-translate-x-1 group-hover:scale-105'
        />
        <p className='bg-gradient-to-tr from-primary to-secondary bg-clip-text font-semibold uppercase tracking-tight text-transparent'>
          Back Home
        </p>
      </Link>
    </button>
  )
}
