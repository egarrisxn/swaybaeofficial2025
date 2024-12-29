import Image from 'next/image'
import {ChevronDown} from '@/components/(icons)/chevron-down'
import TextBorder from '@/components/ui/text-border'

//! HERO WITH BOTH
export default function HeroSection() {
  return (
    <section className='relative h-screen w-full overflow-hidden'>
      {/* Top Text Goes Here */}
      {/* <div className='absolute top-10 z-30 flex w-full justify-center border text-white'></div> */}

      {/* Middle Text Goes Here */}
      <div className='absolute z-30 flex size-full items-center justify-center pb-36 text-center sm:pb-24 md:pb-16 lg:pb-24'>
        <TextBorder text='Creator of Chaos' />
      </div>

      {/* Bottom Text Goes Here */}
      <div className='absolute bottom-5 z-30 flex w-full animate-bounce justify-center text-white lg:bottom-10'>
        <ChevronDown className='size-7 md:size-8 lg:size-9 xl:size-10 2xl:size-12' />
      </div>

      {/* Black Overlay */}
      <div className='absolute inset-0 z-20 bg-black opacity-50'></div>

      {/* Desktop Video/Image */}
      <div className='absolute inset-0 z-10 hidden size-full md:block'>
        <video
          aria-hidden='true'
          autoPlay
          className='pointer-events-none absolute inset-0 size-full object-cover'
          // loop
          muted
          playsInline
          poster='/hero/desktop.png'
          src='/hero/desktop.mp4'
          style={{
            maskImage: `linear-gradient(to top, transparent, black 3%)`,
          }}
        >
          <Image
            alt='Fallback image for desktop video'
            className='size-full object-cover'
            height={1440}
            src='/hero/desktop.png'
            width={2560}
          />
        </video>
      </div>

      {/* Mobile Video/Image */}
      <div
        className='absolute inset-0 z-10 block size-full md:hidden'
        style={{paddingBottom: '56.25%'}}
      >
        <video
          aria-hidden='true'
          autoPlay
          className='pointer-events-none absolute inset-0 size-full object-cover'
          // loop
          muted
          playsInline
          poster='/hero/mobile.png'
          src='/hero/mobile.mp4'
          style={{
            maskImage: `linear-gradient(to top, transparent, black 3%)`,
          }}
        >
          <Image
            alt='hero photo'
            className='pointer-events-none absolute inset-0 size-full object-cover'
            height={1920}
            src='/hero/mobile.png'
            width={1080}
          />
        </video>
      </div>
    </section>
  )
}
