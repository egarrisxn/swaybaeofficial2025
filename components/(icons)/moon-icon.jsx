'use client'
import {motion, useAnimation} from 'motion/react'
import {ToolTip} from '@/components/ui/tooltip'

const svgVariants = {
  normal: {
    rotate: 0,
  },
  animate: {
    rotate: [0, -10, 10, -5, 5, 0],
  },
}

const svgTransition = {
  duration: 1.2,
  ease: 'easeInOut',
}

const MoonIcon = () => {
  const controls = useAnimation()

  return (
    <div
      className='flex cursor-pointer select-none items-center justify-center overflow-hidden rounded-md p-2 transition-colors duration-200'
      onMouseEnter={() => controls.start('animate')}
      onMouseLeave={() => controls.start('normal')}
    >
      <motion.svg
        xmlns='http://www.w3.org/2000/svg'
        width={24}
        height={24}
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
        variants={svgVariants}
        animate={controls}
        transition={svgTransition}
      >
        <path d='M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z' />
      </motion.svg>
    </div>
  )
}

export {MoonIcon}
