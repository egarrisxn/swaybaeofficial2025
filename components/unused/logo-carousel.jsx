'use client'
import React, {useCallback, useEffect, useMemo, useState} from 'react'
import Image from 'next/image'
import {AnimatePresence, motion} from 'motion/react'
import {brandSvgs} from '@/lib/data' // Import the data

// Utility function to randomly shuffle an array
const shuffleArray = (array) => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

// Distributes logos across multiple columns ensuring a balanced number
const distributeLogos = (allLogos, columnCount) => {
  const shuffled = shuffleArray(allLogos)
  const columns = Array.from({length: columnCount}, () => [])

  shuffled.forEach((logo, index) => {
    columns[index % columnCount].push(logo)
  })

  const maxLength = Math.max(...columns.map((col) => col.length))
  columns.forEach((col) => {
    while (col.length < maxLength) {
      col.push(shuffled[Math.floor(Math.random() * shuffled.length)])
    }
  })

  return columns
}

// Memoized LogoColumn component
const LogoColumn = React.memo(({logos, index, currentTime}) => {
  const cycleInterval = 3000 // Time each logo is displayed (ms)
  const columnDelay = index * 200
  const adjustedTime = (currentTime + columnDelay) % (cycleInterval * logos.length)
  const currentIndex = Math.floor(adjustedTime / cycleInterval)

  const CurrentLogo = useMemo(() => logos[currentIndex].img, [logos, currentIndex])

  return (
    <motion.div
      className='relative h-16 w-16 overflow-hidden sm:h-20 sm:w-20 md:h-40 md:w-40'
      initial={{opacity: 0, y: 50}}
      animate={{opacity: 1, y: 0}}
      transition={{
        delay: index * 0.1,
        duration: 0.5,
        ease: 'easeOut',
      }}
    >
      <AnimatePresence mode='wait'>
        <motion.div
          key={`${logos[currentIndex].id}-${currentIndex}`}
          className='absolute inset-0 flex items-center justify-center'
          initial={{y: '10%', opacity: 0, filter: 'blur(8px)'}}
          animate={{
            y: '0%',
            opacity: 1,
            filter: 'blur(0px)',
            transition: {
              type: 'spring',
              stiffness: 300,
              damping: 20,
              mass: 1,
              bounce: 0.2,
              duration: 0.5,
            },
          }}
          exit={{
            y: '-20%',
            opacity: 0,
            filter: 'blur(6px)',
            transition: {
              type: 'tween',
              ease: 'easeIn',
              duration: 0.3,
            },
          }}
        >
          <CurrentLogo className='h-12 max-h-[80%] w-12 max-w-[80%] object-contain sm:h-16 sm:w-16 md:h-32 md:w-32' />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
})

LogoColumn.displayName = 'LogoColumn'

// Main LogoCarousel component
function LogoCarousel({columnCount = 2}) {
  const [logoSets, setLogoSets] = useState([])
  const [currentTime, setCurrentTime] = useState(0)

  const allLogos = useMemo(
    () =>
      brandSvgs.map((brand) => ({
        ...brand,
        img: () => <Image width={400} height={400} src={brand.src} alt={brand.name} />,
      })),
    [],
  )

  useEffect(() => {
    const distributedLogos = distributeLogos(allLogos, columnCount)
    setLogoSets(distributedLogos)
  }, [allLogos, columnCount])

  const updateTime = useCallback(() => {
    setCurrentTime((prevTime) => prevTime + 100)
  }, [])

  useEffect(() => {
    const intervalId = setInterval(updateTime, 100)
    return () => clearInterval(intervalId)
  }, [updateTime])

  return (
    <div className='flex space-x-4 md:space-x-8 lg:space-x-12 xl:space-x-16'>
      {logoSets.map((logos, index) => (
        <LogoColumn key={index} logos={logos} index={index} currentTime={currentTime} />
      ))}
    </div>
  )
}

export {LogoCarousel}

// 'use client'
// import React, {useCallback, useEffect, useMemo, useState} from 'react'
// import Image from 'next/image'
// import {AnimatePresence, motion} from 'motion/react'
// import {brandSvgs} from '@/lib/data'

// // Utility function to randomly shuffle an array
// const shuffleArray = (array) => {
//   const shuffled = [...array]
//   for (let i = shuffled.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1))
//     ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
//   }
//   return shuffled
// }

// // Distributes logos across multiple columns ensuring a balanced number
// const distributeLogos = (allLogos, columnCount) => {
//   const shuffled = shuffleArray(allLogos)
//   const columns = Array.from({length: columnCount}, () => [])

//   // Distribute logos evenly across columns
//   shuffled.forEach((logo, index) => {
//     columns[index % columnCount].push(logo)
//   })

//   // Ensure all columns have the same number of logos by filling shorter columns
//   const maxLength = Math.max(...columns.map((col) => col.length))
//   columns.forEach((col) => {
//     while (col.length < maxLength) {
//       col.push(shuffled[Math.floor(Math.random() * shuffled.length)])
//     }
//   })

//   return columns
// }

// // eslint-disable-next-line react/display-name
// const LogoColumn = React.memo(({logos, index, currentTime}) => {
//   const cycleInterval = 3000 // Time each logo is displayed (in milliseconds)
//   const columnDelay = index * 200 // Stagger the start of each column's animation
//   // Calculate which logo should be displayed based on the current time
//   const adjustedTime = (currentTime + columnDelay) % (cycleInterval * logos.length)
//   const currentIndex = Math.floor(adjustedTime / cycleInterval)

//   // Memoize the current logo to prevent unnecessary re-renders
//   const CurrentLogo = useMemo(() => logos[currentIndex].img, [logos, currentIndex])

//   return (
//     <motion.div
//       className='relative h-16 w-16 overflow-hidden sm:h-20 sm:w-20 md:h-40 md:w-40'
//       initial={{opacity: 0, y: 50}} // Start invisible and below final position
//       animate={{opacity: 1, y: 0}} // Animate to full opacity and final position
//       transition={{
//         delay: index * 0.1, // Stagger the animation of each column
//         duration: 0.5,
//         ease: 'easeOut',
//       }}
//     >
//       {/* AnimatePresence enables animation of components that are removed from the DOM */}
//       <AnimatePresence mode='wait'>
//         {/* Framer Motion component for each logo */}
//         <motion.div
//           key={`${logos[currentIndex].id}-${currentIndex}`}
//           className='absolute inset-0 flex items-center justify-center'
//           // Animation for when the logo enters
//           initial={{y: '10%', opacity: 0, filter: 'blur(8px)'}}
//           // Animation for when the logo is displayed
//           animate={{
//             y: '0%',
//             opacity: 1,
//             filter: 'blur(0px)',
//             transition: {
//               type: 'spring',
//               stiffness: 300,
//               damping: 20,
//               mass: 1,
//               bounce: 0.2,
//               duration: 0.5,
//             },
//           }}
//           // Animation for when the logo exits
//           exit={{
//             y: '-20%',
//             opacity: 0,
//             filter: 'blur(6px)',
//             transition: {
//               type: 'tween',
//               ease: 'easeIn',
//               duration: 0.3,
//             },
//           }}
//         >
//           <CurrentLogo className='h-12 max-h-[80%] w-12 max-w-[80%] object-contain sm:h-16 sm:w-16 md:h-32 md:w-32' />
//         </motion.div>
//       </AnimatePresence>
//     </motion.div>
//   )
// })

// // Main LogoCarousel component
// function LogoCarousel({columnCount = 2}) {
//   const [logoSets, setLogoSets] = useState([])
//   const [currentTime, setCurrentTime] = useState(0)

//   // Memoize the array of logos to prevent unnecessary re-renders
//   const allLogos = useMemo(
//     () => [
//       {
//         name: 'YouTube',
//         id: 1,
//         img: () => (
//           <Image width={400} height={400} src='/brands/svgs/youtube-svg.svg' alt='YouTube' />
//         ),
//       },
//       {
//         name: 'GCX',
//         id: 2,
//         img: () => <Image width={400} height={400} src='/brands/svgs/gcx-svg.svg' alt='GCX' />,
//       },
//       {
//         name: 'HelloFresh',
//         id: 3,
//         img: () => (
//           <Image width={400} height={400} src='/brands/svgs/hellofresh-svg.svg' alt='HelloFresh' />
//         ),
//       },
//       {
//         name: 'Twitch',
//         id: 4,
//         img: () => (
//           <Image width={400} height={400} src='/brands/svgs/twitch-svg.svg' alt='Twitch' />
//         ),
//       },
//       {
//         name: '1000 Dreams',
//         id: 5,
//         img: () => (
//           <Image width={400} height={400} src='/brands/svgs/1000dreams-svg.svg' alt='1000 Dreams' />
//         ),
//       },
//       {
//         name: 'Supergirl',
//         id: 6,
//         img: () => (
//           <Image width={400} height={400} src='/brands/svgs/supergirl-svg.svg' alt='Supergirl' />
//         ),
//       },
//       {
//         name: 'Blizzard',
//         id: 7,
//         img: () => (
//           <Image width={400} height={400} src='/brands/svgs/blizzard-svg.svg' alt='Blizzard' />
//         ),
//       },
//       {
//         name: 'DreamHack',
//         id: 8,
//         img: () => (
//           <Image width={400} height={400} src='/brands/svgs/dreamhack-svg.svg' alt='DreamHack' />
//         ),
//       },
//     ],
//     [],
//   )

//   // Distribute logos across columns when the component mounts
//   useEffect(() => {
//     const distributedLogos = distributeLogos(allLogos, columnCount)
//     setLogoSets(distributedLogos)
//   }, [allLogos, columnCount])

//   // Function to update the current time (used for logo cycling)
//   const updateTime = useCallback(() => {
//     setCurrentTime((prevTime) => prevTime + 100)
//   }, [])

//   // Set up an interval to update the time every 100ms
//   useEffect(() => {
//     const intervalId = setInterval(updateTime, 100)
//     return () => clearInterval(intervalId)
//   }, [updateTime])

//   // Render the logo columns
//   return (
//     <div className='flex space-x-4 md:space-x-8 lg:space-x-12 xl:space-x-16'>
//       {logoSets.map((logos, index) => (
//         <LogoColumn key={index} logos={logos} index={index} currentTime={currentTime} />
//       ))}
//     </div>
//   )
// }

// export {LogoCarousel}
