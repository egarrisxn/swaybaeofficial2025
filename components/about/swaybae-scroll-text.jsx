'use client'
import {VelocityScroll} from '@/components/ui/velocity-scroll'

export default function SwayBaeScrollText() {
  return (
    <section className='mb-2 mt-8'>
      <div className='mx-auto flex max-w-[calc(100vw-1.2rem)] overflow-hidden'>
        <VelocityScroll
          text='SwayBae'
          default_velocity={2}
          className='text-center font-sans text-4xl font-black italic tracking-tight text-black drop-shadow-lg md:text-7xl md:leading-[5rem] dark:text-white'
        />
      </div>
    </section>
  )
}
