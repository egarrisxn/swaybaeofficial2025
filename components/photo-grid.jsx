import Image from 'next/image'
import {BlurFade} from '@/components/ui/blur-fade'
import {images} from '@/lib/data'

export function PhotoGrid() {
  return (
    <section id='photos'>
      <div className='columns-2 gap-4 sm:columns-3'>
        {images.map((imageUrl, idx) => {
          const width = 800
          const height = 600
          return (
            <BlurFade key={imageUrl} delay={0.25 + idx * 0.05} inView>
              <Image
                className='mb-4 rounded-lg object-contain'
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
