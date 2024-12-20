import Image from 'next/image'
import {cva} from 'class-variance-authority'
import {cn} from '@/lib/utils'

const backgroundVariants = cva(
  'relative h-screen max-h-[2000px] h-screen w-full min-h-[500px] lg:min-h-[600px] overflow-hidden',
  {
    variants: {
      overlay: {
        dark: 'before:absolute absolute before:inset-0 inset-0 before:bg-black bg-black before:opacity-50 opacity-50',
        light:
          'before:absolute absolute before:inset-0 inset-0 before:bg-white bg-white before:opacity-50 opacity-50',
        both: 'before:absolute absolute before:inset-0 inset-0 before:bg-background bg-background before:opacity-50 opacity-50',
        none: '',
      },
      type: {
        image: '',
        video: 'z-10',
      },
    },
    defaultVariants: {
      overlay: 'none',
      type: 'image',
    },
  },
)

const BackgroundMedia = ({variant = 'dark', type = 'video', src, alt = ''}) => {
  const mediaClasses = cn(backgroundVariants({overlay: variant, type}))

  const renderMedia = () => {
    if (type === 'video') {
      return (
        <video
          aria-hidden='true'
          autoPlay
          className='pointer-events-none absolute inset-0 size-full object-fill transition-opacity duration-300'
          // loop
          muted
          playsInline
          // style={{
          //   maskImage: `linear-gradient(to top, transparent, black 2%)`,
          // }}
        >
          <source src={src} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      )
    } else {
      return (
        <Image
          alt={alt}
          className='absolute inset-0 size-full object-cover'
          loading='eager'
          src={src}
        />
      )
    }
  }

  return <div className={mediaClasses}>{renderMedia()}</div>
}

export {BackgroundMedia}

//! This option has a Play/Pause Button

// 'use client'
// import React, {useRef, useState} from 'react'
// import Image from 'next/image'
// import {cva} from 'class-variance-authority'
// import {cn} from '@/lib/utils'

// const backgroundVariants = cva(
//   'relative h-screen max-h-[2000px] w-full min-h-[500px] lg:min-h-[600px]',
//   {
//     variants: {
//       overlay: {
//         none: '',
//         light: 'before:absolute before:inset-0 before:bg-white before:opacity-30',
//         dark: 'before:absolute before:inset-0 before:bg-black before:opacity-30',
//       },
//       type: {
//         image: '',
//         video: 'z-10',
//       },
//     },
//     defaultVariants: {
//       overlay: 'none',
//       type: 'image',
//     },
//   },
// )

// const BackgroundMedia = ({variant = 'light', type = 'image', src, alt = ''}) => {
//   const [isPlaying, setIsPlaying] = useState(true)
//   const mediaRef = useRef(null)

//   const toggleMediaPlay = () => {
//     if (type === 'video' && mediaRef.current) {
//       if (isPlaying) {
//         mediaRef.current.pause()
//       } else {
//         mediaRef.current.play()
//       }
//       setIsPlaying(!isPlaying)
//     }
//   }

//   const mediaClasses = cn(backgroundVariants({overlay: variant, type}), 'overflow-hidden')

//   const renderMedia = () => {
//     if (type === 'video') {
//       return (
//         <video
//           ref={mediaRef}
//           aria-hidden='true'
//           muted
//           className='pointer-events-none absolute inset-0 size-full object-cover transition-opacity duration-300'
//           autoPlay
//           playsInline
//           loop
//         >
//           <source src={src} type='video/mp4' />
//           Your browser does not support the video tag.
//         </video>
//       )
//     } else {
//       return (
//         <Image
//           src={src}
//           alt={alt}
//           className='absolute inset-0 size-full object-cover'
//           loading='eager'
//         />
//       )
//     }
//   }

//   return (
//     <div className={mediaClasses}>
//       {renderMedia()}
//       {type === 'video' && (
//         <button
//           aria-label={isPlaying ? 'Pause video' : 'Play video'}
//           className='absolute bottom-4 right-4 z-50 bg-gray-900 px-4 py-2 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2'
//           onClick={toggleMediaPlay}
//         >
//           {isPlaying ? 'Pause' : 'Play'}
//         </button>
//       )}
//     </div>
//   )
// }

// export {BackgroundMedia}
