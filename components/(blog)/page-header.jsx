import Link from 'next/link'
import {ChevronLeft} from 'lucide-react'
import SearchBar from './search-bar'

export default function PageHeader({
  id,
  className,
  children,
  showHr = false,
  showLink = false,
  linkHref = '',
  linkText = '',
  showSearch = false,
}) {
  return (
    <div
      className={`mx-auto w-full px-2 pt-4 md:pt-12 lg:px-4 lg:pt-16 ${
        showSearch ? 'flex flex-row items-center justify-end gap-2 sm:justify-between' : 'block'
      } ${className} ${showSearch ? '' : ''}`}
    >
      {showHr && <hr className='rounded-lg border' />}

      {showLink && (
        <div className='ml-2 hidden flex-row items-center gap-0.5 sm:flex'>
          <Link
            href={linkHref}
            className='text-bold group flex cursor-pointer items-center gap-2 text-muted-foreground hover:text-primary'
          >
            <ChevronLeft className='ml-1 size-6 transition group-hover:-translate-x-1' />{' '}
            <span
              id={id}
              aria-label={linkText}
              className={`text-lg tracking-widest`}
              // className={`bg-gradient-to-tr from-purple-500 via-pink-500 to-pink-200 bg-clip-text text-xl uppercase tracking-widest text-transparent`}
            >
              {linkText}
            </span>
          </Link>
        </div>
      )}

      {!showLink && (
        <div className='ml-2 hidden items-center sm:flex'>
          <span id={id} className={`text-lg tracking-widest`}>
            {children}
          </span>
        </div>
      )}

      {showSearch && <SearchBar placeholder='Search..' />}
    </div>
  )
}
