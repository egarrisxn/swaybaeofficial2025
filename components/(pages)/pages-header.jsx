import Link from 'next/link'
import ThemeToggle from '../theme-toggle'

export default function PagesHeader() {
  return (
    <header className='fixed left-0 top-0 z-40 mx-auto flex w-full items-center bg-white/50 bg-opacity-50 shadow backdrop-blur-md transition'>
      <nav className='flex w-full flex-row items-center justify-between px-2 py-5 lg:px-4'>
        <div className='flex items-center justify-start pl-1.5 lg:pl-0'>
          <Link href='/' className='font-semibold'>
            SwayBae
          </Link>
        </div>
        <div className='flex items-center justify-end gap-1'>
          <Link href='/subathon' className='font-semibold uppercase text-blue-800'>
            Subathon 2024!
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
