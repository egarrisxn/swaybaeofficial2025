'use client'
import {useEffect, useState} from 'react'
import {motion} from 'framer-motion'

let interval

export const CardStack = ({items, offset, scaleFactor}) => {
  const CARD_OFFSET = offset || 10
  const SCALE_FACTOR = scaleFactor || 0.06
  const [cards, setCards] = useState(items)

  useEffect(() => {
    startFlipping()
  }, [])

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards) => {
        const newArray = [...prevCards] // create a copy of the array
        const lastItem = newArray.pop() // remove the last element
        newArray.unshift(lastItem) // add the last element to the front
        return newArray
      })
    }, 5000)

    return () => clearInterval(interval)
  }

  return (
    <div className='relative h-96 w-72 sm:h-[30rem] sm:w-96'>
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className='absolute flex h-fit w-72 flex-col justify-between rounded-3xl border bg-white p-2 shadow-xl shadow-black/[0.1] sm:min-h-[30rem] sm:min-w-96 dark:bg-black dark:shadow-white/[0.05]'
            style={{
              transformOrigin: 'top center',
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, // decrease z-index for the cards that are behind
            }}
          >
            <div className='relative flex flex-row items-center justify-center rounded-3xl'>
              {card.content}
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
