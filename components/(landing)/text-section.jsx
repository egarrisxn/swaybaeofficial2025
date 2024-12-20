'use client'
import {VelocityScroll} from '@/components/ui/velocity-scroll'

export default function TextSection() {
  return (
    <div className='mx-auto flex max-w-[calc(100vw-1.2rem)] overflow-hidden'>
      <VelocityScroll
        text='Creator of Chaos'
        default_velocity={4}
        className='font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm md:text-7xl md:leading-[5rem] dark:text-white'
      />
    </div>
  )
}
