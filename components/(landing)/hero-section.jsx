import {IoIosArrowDown} from 'react-icons/io'
import TextBorder from '@/components/ui/text-border'

export default function HeroSection() {
  return (
    <section className='relative z-10 h-screen w-full overflow-hidden'>
      {/* Top Text Goes Here */}
      {/* <div className='absolute top-10 z-20 flex w-full justify-center text-white'>Top Text</div> */}

      {/* Middle Text Goes Here */}
      <div className='absolute z-20 flex size-full items-center justify-center text-center'>
        <TextBorder text='Creator of Chaos' />
      </div>

      {/* Middle Text Goes Here */}
      {/* <div className='absolute z-20 flex size-full items-center justify-center text-center'>
          <h1 className='max-w-7xl mt-1 bg-gradient-to-t from-neutral-200 to-neutral-300 bg-clip-text pb-3 text-xl font-black italic tracking-tight text-transparent sm:mt-0 md:text-4xl lg:text-5xl xl:mt-2 xl:text-6xl 2xl:text-[6rem]'>
            Creator of Chaos
          </h1>
      </div> */}

      {/* Bottom Text Goes Here */}
      <div className='absolute bottom-10 z-20 flex w-full justify-center text-2xl text-white'>
        <IoIosArrowDown />
      </div>

      {/* Black Overlay */}
      <div className='absolute inset-0 bg-black opacity-50 before:absolute before:inset-0 before:bg-black before:opacity-50'></div>

      {/* Video Background for Both */}
      <div className='absolute inset-0 block size-full'>
        <video
          aria-hidden='true'
          autoPlay
          className='pointer-events-none absolute inset-0 size-full object-cover transition-opacity duration-300 2xl:object-fill'
          // loop
          muted
          playsInline
          src='/videos/hero-desktop.mp4'
          style={{
            maskImage: `linear-gradient(to top, transparent, black 2%)`,
          }}
        >
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Video Background for Desktop */}
      {/* <div className='absolute inset-0 hidden size-full md:block'>
        <video
          aria-hidden='true'
          autoPlay
          className='pointer-events-none absolute inset-0 size-full object-cover transition-opacity duration-300 2xl:object-fill' //! object-fill
          // loop
          muted
          playsInline
          src='/videos/hero-desktop.mp4'
          style={{
            maskImage: `linear-gradient(to top, transparent, black 2%)`,
          }}
        >
          Your browser does not support the video tag.
        </video>
      </div> */}

      {/* Video Background for Mobile */}
      {/* <div className='block size-full md:hidden'>
        <div className='relative size-full' style={{paddingBottom: '56.25%'}}>
          <video
            aria-hidden='true'
            autoPlay
            className='pointer-events-none absolute left-0 top-0 size-full object-fill transition-opacity duration-300' //! object-fill
            // loop
            muted
            playsInline
            src='/videos/hero-mobile.mp4'
            style={{
              maskImage: `linear-gradient(to top, transparent, black 2%)`,
            }}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div> */}
    </section>
  )
}
