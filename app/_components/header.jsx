'use client'
import {useState, useEffect} from 'react'
import Link from 'next/link'
import ThemeToggle from './theme-toggle'

export function Header({isSticky = false}) {
  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    if (isSticky) {
      const handleScroll = () => {
        setSticky(window.scrollY >= 360)
      }
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [isSticky])

  return (
    <header
      className={`mx-auto flex w-full items-center backdrop-blur-md transition-opacity duration-300 ease-in-out ${
        isSticky
          ? sticky
            ? 'fixed z-40 bg-zinc-50/70 dark:bg-stone-800/70'
            : 'absolute opacity-0'
          : 'fixed left-0 top-0 z-40 bg-zinc-50/70 dark:bg-stone-800/70'
      }`}
    >
      <nav className='flex w-full flex-row items-center justify-between px-2 py-5 lg:px-4 xl:px-6'>
        <div className='flex items-center justify-start pl-1.5 lg:pl-1'>
          <Link
            href='/'
            className='bg-gradient-to-t from-neutral-800 to-neutral-800 bg-clip-text font-display text-3xl tracking-tighter text-transparent dark:from-stone-200 dark:to-neutral-200'
          >
            Sway Bae
          </Link>
        </div>
        <div className='flex items-center justify-end gap-1 text-xs md:gap-4 md:text-base'>
          <Link
            href='/community'
            className='font-semibold uppercase hover:text-blue-800 hover:underline hover:underline-offset-4'
          >
            Community
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
