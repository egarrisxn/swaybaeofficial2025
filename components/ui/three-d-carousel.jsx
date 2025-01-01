'use client'
import {memo, useEffect, useLayoutEffect, useMemo, useState} from 'react'
import {AnimatePresence, motion, useAnimation, useMotionValue, useTransform} from 'motion/react'

export const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

const IS_SERVER = typeof window === 'undefined'

export function useMediaQuery(query, {defaultValue = false, initializeWithValue = true} = {}) {
  const getMatches = (query) => {
    if (IS_SERVER) {
      return defaultValue
    }
    return window.matchMedia(query).matches
  }

  const [matches, setMatches] = useState(() => {
    if (initializeWithValue) {
      return getMatches(query)
    }
    return defaultValue
  })

  const handleChange = () => {
    setMatches(getMatches(query))
  }

  useIsomorphicLayoutEffect(() => {
    const matchMedia = window.matchMedia(query)
    handleChange()

    matchMedia.addEventListener('change', handleChange)

    return () => {
      matchMedia.removeEventListener('change', handleChange)
    }
  }, [query])

  return matches
}

const keywords = [
  'night',
  'city',
  'sky',
  'sunset',
  'sunrise',
  'winter',
  'skyscraper',
  'building',
  'cityscape',
  'architecture',
  'street',
  'lights',
  'downtown',
  'bridge',
]

const duration = 0.15
const transition = {duration, ease: [0.32, 0.72, 0, 1], filter: 'blur(4px)'}
const transitionOverlay = {duration: 0.5, ease: [0.32, 0.72, 0, 1]}

const Carousel = memo(({handleClick, controls, cards, isCarouselActive}) => {
  const isScreenSizeSm = useMediaQuery('(max-width: 640px)')
  const cylinderWidth = isScreenSizeSm ? 1100 : 1800
  const faceCount = cards.length
  const faceWidth = cylinderWidth / faceCount
  const radius = cylinderWidth / (2 * Math.PI)
  const rotation = useMotionValue(0)
  const transform = useTransform(rotation, (value) => `rotate3d(0, 1, 0, ${value}deg)`)

  return (
    <div
      className='bg-mauve-dark-2 flex h-full items-center justify-center'
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
        willChange: 'transform',
      }}
    >
      <motion.div
        drag={isCarouselActive ? 'x' : false}
        className='relative flex h-full origin-center cursor-grab justify-center active:cursor-grabbing'
        style={{
          transform,
          rotateY: rotation,
          width: cylinderWidth,
          transformStyle: 'preserve-3d',
        }}
        onDrag={(_, info) =>
          isCarouselActive && rotation.set(rotation.get() + info.offset.x * 0.05)
        }
        onDragEnd={(_, info) =>
          isCarouselActive &&
          controls.start({
            rotateY: rotation.get() + info.velocity.x * 0.05,
            transition: {
              type: 'spring',
              stiffness: 100,
              damping: 30,
              mass: 0.1,
            },
          })
        }
        animate={controls}
      >
        {cards.map((imgUrl, i) => (
          <motion.div
            key={`key-${imgUrl}-${i}`}
            className='bg-mauve-dark-2 absolute flex h-full origin-center items-center justify-center rounded-xl p-2'
            style={{
              width: `${faceWidth}px`,
              transform: `rotateY(${i * (360 / faceCount)}deg) translateZ(${radius}px)`,
            }}
            onClick={() => handleClick(imgUrl, i)}
          >
            <motion.img
              src={imgUrl}
              alt={`keyword_${i} ${imgUrl}`}
              layoutId={`img-${imgUrl}`}
              className='pointer-events-none aspect-square w-full rounded-xl object-cover'
              initial={{filter: 'blur(4px)'}}
              layout='position'
              animate={{filter: 'blur(0px)'}}
              transition={transition}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
})

Carousel.displayName = 'Carousel'

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`

export function ThreeDPhotoCarousel() {
  const [activeImg, setActiveImg] = useState(null)
  const [isCarouselActive, setIsCarouselActive] = useState(true)
  const controls = useAnimation()
  const cards = useMemo(
    () => keywords.map((keyword) => `https://picsum.photos/200/300?${keyword}`),
    [],
  )

  useEffect(() => {
    console.log('Cards loaded:', cards)
  }, [cards])

  const handleClick = (imgUrl) => {
    setActiveImg(imgUrl) // Set the active image to the clicked one
    setIsCarouselActive(false) // Deactivate the carousel
    controls.stop() // Stop the carousel animation
  }

  const handleClose = () => {
    setActiveImg(null)
    setIsCarouselActive(true)
  }

  return (
    <motion.div layout className='relative'>
      <AnimatePresence mode='sync'>
        {activeImg && (
          <motion.div
            initial={{opacity: 0, scale: 0}}
            animate={{opacity: 1, scale: 1}}
            exit={{opacity: 0, scale: 0}}
            layoutId={`img-container-${activeImg}`}
            layout='position'
            onClick={handleClose}
            className='fixed inset-0 z-50 m-5 flex items-center justify-center rounded-3xl bg-black bg-opacity-10 md:m-36 lg:mx-[19rem]'
            style={{willChange: 'opacity'}}
            transition={transitionOverlay}
          >
            <motion.img
              layoutId={`img-${activeImg}`}
              src={activeImg}
              className='max-h-full max-w-full rounded-lg shadow-lg'
              initial={{scale: 0.5}} // Start with a smaller scale
              animate={{scale: 1}} // Animate to full scale
              transition={{
                delay: 0.5,
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
              }} // Clean ease-out curve
              style={{
                willChange: 'transform',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <div className='relative h-[500px] w-full overflow-hidden'>
        <Carousel
          handleClick={handleClick}
          controls={controls}
          cards={cards}
          isCarouselActive={isCarouselActive}
        />
      </div>
    </motion.div>
  )
}