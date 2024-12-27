'use client'
import {ArrowUp} from 'lucide-react'

export function ScrollToTop({text = 'Back to top'}) {
  const scrollOnClick = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  return (
    <button className='group flex items-center justify-center gap-1' onClick={scrollOnClick}>
      <p className='bg-gradient-to-bl from-primary/90 via-primary/70 to-primary/50 bg-clip-text font-semibold uppercase tracking-tight text-transparent'>
        {text}
      </p>
      <ArrowUp
        size={16}
        className='transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-105'
      />
    </button>
  )
}
