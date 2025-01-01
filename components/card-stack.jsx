'use client'
import Image from 'next/image'
import React, {useState, useEffect, useRef, useCallback} from 'react'
import {motion} from 'motion/react'
import {useDrag} from '@use-gesture/react'
import {merchCards} from '@/lib/data'

export function CardStack() {
  const [stack, setStack] = useState(merchCards)
  const [isSwiping, setIsSwiping] = useState(false)
  const autoSwipeTimeout = useRef(null)

  const handleSwipeComplete = useCallback(
    (direction) => {
      if (isSwiping) return
      setIsSwiping(true)
      if (direction === 'left') {
        setStack((prevStack) => [...prevStack.slice(1), prevStack[0]])
      }
      setTimeout(() => setIsSwiping(false), 300)
    },
    [isSwiping],
  )

  const bind = useDrag(
    ({down, movement: [mx], velocity, cancel}) => {
      if (!down && (velocity > 0.1 || Math.abs(mx) > 10) && !isSwiping) {
        const direction = mx < 0 ? 'left' : 'right'
        cancel()
        handleSwipeComplete(direction)
      }
    },
    {axis: 'x'},
  )

  useEffect(() => {
    autoSwipeTimeout.current = setInterval(() => {
      handleSwipeComplete('left')
    }, 5000)

    return () => clearInterval(autoSwipeTimeout.current)
  }, [handleSwipeComplete])

  return (
    <div className='relative h-96 w-72 sm:h-[30rem] sm:w-96'>
      {stack.map((card, index) => {
        const isTopCard = index === 0
        const scaleFactor = 1 - index * 0.03
        const spreadFactor = index * 6
        const rotationAngle = index * 3

        return (
          <motion.div
            key={card.id}
            className='absolute flex size-fit min-w-48 max-w-[17rem] flex-col justify-between rounded-3xl border bg-white p-2 shadow-xl xs:min-h-96 xs:min-w-[19rem] xs:max-w-[26rem] sm:min-h-[30rem] sm:min-w-96 dark:bg-black'
            style={{
              zIndex: stack.length - index,
            }}
            animate={{
              scale: scaleFactor,
              x: spreadFactor,
              rotate: rotationAngle,
              y: index * 6,
            }}
            drag={isTopCard ? 'x' : false}
            dragConstraints={{left: 0, right: 0}}
            dragElastic={0.3}
            transition={{type: 'spring', stiffness: 300, damping: 20}}
            {...(isTopCard ? bind() : {})}
          >
            <div className='relative flex flex-row items-center justify-center rounded-3xl'>
              <Image
                src={card.src}
                alt={card.name}
                width='384'
                height='550'
                priority
                className='pointer-events-none flex rounded-2xl object-cover'
              />
            </div>
            <div>
              <p className='absolute bottom-10 left-5 text-sm font-medium text-black'>
                {card.name}
              </p>
              <p className='absolute bottom-5 left-5 text-sm text-slate-700'>{card.designation}</p>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
