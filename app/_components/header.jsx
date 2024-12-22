'use client'
import {useState, useEffect} from 'react'
import Link from 'next/link'
import ThemeToggle from './theme-toggle'

export function LandingHeader() {
  const [sticky, setSticky] = useState(false)
  const handleStickyNavbar = () => {
    if (window.scrollY >= 360) {
      setSticky(true)
    } else {
      setSticky(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleStickyNavbar)
  })

  return (
    <>
      <header
        className={`mx-auto flex w-full items-center shadow backdrop-blur-md transition-opacity duration-300 ease-in-out ${
          sticky ? 'fixed z-40 bg-white/70 dark:bg-slate-900/70' : 'absolute opacity-0'
        }`}
      >
        <nav className='flex w-full flex-row items-center justify-between px-2 py-5 lg:px-4 xl:px-6'>
          <div className='flex items-center justify-start pl-1.5 lg:pl-1'>
            <Link
              href='/'
              className='bg-gradient-to-t from-neutral-600 via-neutral-700 to-neutral-800 bg-clip-text font-serif text-3xl font-black tracking-tight text-transparent drop-shadow-[0_0.5px_0.5px_rgba(0,0,0,0.8)]'
            >
              Sway Bae
            </Link>
          </div>
          <div className='flex items-center justify-end gap-1'>
            {/* <Link href='/subathon' className='font-semibold uppercase text-blue-800'>
              Subathon 2024!
            </Link> */}
            <ThemeToggle />
          </div>
        </nav>
      </header>
    </>
  )
}

export function PagesHeader() {
  return (
    <header className='fixed left-0 top-0 z-40 mx-auto flex w-full items-center bg-neutral-100/70 bg-opacity-50 shadow backdrop-blur-md transition dark:bg-slate-900/70'>
      <nav className='flex w-full flex-row items-center justify-between px-2 py-5 lg:px-4 xl:px-6'>
        <div className='flex items-center justify-start pl-1.5 lg:pl-1'>
          <Link href='/' className='font-display text-3xl tracking-tighter'>
            Sway Bae
          </Link>
        </div>
        <div className='flex items-center justify-end gap-1'>
          {/* <Link href='/subathon' className='font-semibold uppercase text-blue-800'>
              Subathon 2024!
            </Link> */}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
