import Link from 'next/link'
import {ArrowLeft} from '@/components/icons/arrow-left'
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
        <div className='hidden flex-row items-center gap-0.5 sm:flex'>
          <Link
            href={linkHref}
            className='group flex cursor-pointer items-center gap-1 text-muted-foreground hover:text-primary'
          >
            <ArrowLeft className='ml-1 size-4 transition group-hover:-translate-x-1' />{' '}
            <span id={id} className='uppercase tracking-widest'>
              {linkText}
            </span>
          </Link>
        </div>
      )}

      {!showLink && (
        <div className='hidden items-center sm:flex'>
          <span id={id} className={`racking-widest`}>
            {children}
          </span>
        </div>
      )}

      {showSearch && <SearchBar placeholder='Search..' />}
    </div>
  )
}
