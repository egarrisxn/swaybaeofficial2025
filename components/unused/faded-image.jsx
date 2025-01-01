import Image from 'next/image'

export function FadedImage() {
  return (
    <div className='px-2'>
      <div className='relative flex max-w-6xl justify-center overflow-hidden'>
        <Image
          src='/images/twitchcon.png'
          alt='hero-section'
          width={1200}
          height={900}
          className='object-cover'
          style={{
            maskImage: `linear-gradient(to top, transparent, black 40%)`,
          }}
        />
      </div>
    </div>
  )
}
