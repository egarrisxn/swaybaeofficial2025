'use client'
import {useState, useEffect} from 'react'
import {Link} from 'next-view-transitions'
import {navLinks} from '@/lib/data'
import ThemeToggle from './theme-toggle'

export function Header({isSticky = false}) {
  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    if (isSticky) {
      const handleScroll = () => {
        setSticky(window.scrollY >= 480)
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
            ? 'fixed z-40 bg-background text-foreground'
            : 'absolute opacity-0'
          : 'fixed left-0 top-0 z-40 bg-background text-foreground'
      }`}
    >
      <nav className='flex w-full flex-row items-center justify-between gap-0.5 px-2 py-5 lg:gap-1 lg:px-4 xl:px-6 2xl:gap-4'>
        <div className='flex'>
          <Link
            href='/'
            className='bg-gradient-to-t from-neutral-800 to-neutral-800 bg-clip-text font-display text-2xl tracking-tighter text-transparent md:text-3xl dark:from-stone-200 dark:to-neutral-200'
          >
            SB.
          </Link>
        </div>
        <div className='flex flex-1 justify-center border 2xl:border-none'>
          <ul className='inline-flex flex-wrap justify-center gap-1 text-xs text-foreground/70 sm:gap-2 sm:text-sm md:gap-3 lg:gap-4 lg:text-base 2xl:gap-5 2xl:text-lg'>
            {navLinks.map((link) => (
              <li key={link.href}>
                {link.external ? (
                  <a
                    href={link.href}
                    target='_blank'
                    rel='noreferrer noopener'
                    className='hover:text-foreground'
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link href={link.href} className='hover:text-foreground'>
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className='flex'>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
