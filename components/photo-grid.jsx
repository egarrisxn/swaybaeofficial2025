import Image from 'next/image'
import {BlurFade} from '@/components/ui/blur-fade'

const images = [
  '/grid/1.jpg',
  '/grid/2.jpg',
  '/grid/3.jpg',
  '/grid/4.jpg',
  '/grid/5.jpg',
  '/grid/6.jpg',
  '/grid/7.jpg',
  '/grid/8.jpg',
  '/grid/9.jpg',
]

export function PhotoGrid() {
  return (
    <section id='photos'>
      <div className='columns-2 gap-4 md:columns-3 md:gap-6'>
        {images.map((imageUrl, idx) => {
          const width = 800
          const height = 600
          return (
            <BlurFade key={imageUrl} delay={0.25 + idx * 0.05} inView>
              <Image
                className='mb-4 rounded-lg border object-contain shadow-lg md:mb-6'
                src={imageUrl}
                alt={`Public photo ${idx + 1}`}
                width={width}
                height={height}
              />
            </BlurFade>
          )
        })}
      </div>
    </section>
  )
}
