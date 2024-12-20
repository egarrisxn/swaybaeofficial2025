import {IoIosArrowDown} from 'react-icons/io'

export default function HeroSection() {
  return (
    <section className='relative z-10 h-screen w-full overflow-hidden'>
      {/* Top Text Goes Here */}
      <div className='absolute top-4 z-20 flex w-full justify-center text-white'>x</div>

      {/* Middle Text Goes Here */}
      <div className='absolute z-20 flex size-full items-center justify-center text-center'>
        <div className='max-w-7xl border-2 font-extrabold leading-none tracking-tighter text-white'>
          <h1 className='mt-1 bg-gradient-to-t from-neutral-200 to-neutral-300 bg-clip-text pb-3 text-xl font-black italic tracking-tight text-transparent sm:mt-0 md:text-4xl lg:text-5xl xl:mt-2 xl:text-6xl 2xl:text-[6rem]'>
            Creator of Chaos
          </h1>
        </div>
      </div>

      {/* Bottom Text Goes Here */}
      <div className='absolute bottom-10 z-20 flex w-full justify-center text-2xl text-white'>
        <IoIosArrowDown />
      </div>

      {/* Black Overlay */}
      <div className='absolute inset-0 bg-black opacity-50 before:absolute before:inset-0 before:bg-black before:opacity-50'></div>

      {/* Video Background for Desktop */}
      <div className='absolute inset-0 hidden size-full md:block'>
        <video
          aria-hidden='true'
          autoPlay
          className='pointer-events-none absolute inset-0 size-full object-fill transition-opacity duration-300'
          // loop
          muted
          playsInline
          src='/videos/theherovideo.mp4'
          style={{
            maskImage: `linear-gradient(to top, transparent, black 2%)`,
          }}
        >
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Video Background for Mobile */}
      <div className='block size-full md:hidden'>
        <div className='relative size-full' style={{paddingBottom: '56.25%'}}>
          <video
            aria-hidden='true'
            autoPlay
            className='pointer-events-none absolute left-0 top-0 size-full object-fill transition-opacity duration-300'
            // loop
            muted
            playsInline
            src='/videos/theherovideo.mp4'
            style={{
              maskImage: `linear-gradient(to top, transparent, black 2%)`,
            }}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  )
}
