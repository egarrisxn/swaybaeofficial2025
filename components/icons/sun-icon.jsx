'use client'
import {motion, useAnimation} from 'motion/react'
import {ToolTip} from '@/components/ui/tooltip'

const pathVariants = {
  normal: {opacity: 1},
  animate: (i) => ({
    opacity: [0, 1],
    transition: {delay: i * 0.1, duration: 0.3},
  }),
}

const SunIcon = () => {
  const controls = useAnimation()

  return (
    <ToolTip text={'Light Theme'}>
      <div
        className='flex cursor-pointer select-none items-center justify-center rounded-md p-2 transition-colors duration-200'
        onMouseEnter={() => controls.start('animate')}
        onMouseLeave={() => controls.start('normal')}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width={24}
          height={24}
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth={2}
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <circle cx='12' cy='12' r='4' />
          {[
            'M12 2v2',
            'm19.07 4.93-1.41 1.41',
            'M20 12h2',
            'm17.66 17.66 1.41 1.41',
            'M12 20v2',
            'm6.34 17.66-1.41 1.41',
            'M2 12h2',
            'm4.93 4.93 1.41 1.41',
          ].map((d, index) => (
            <motion.path
              key={d}
              d={d}
              animate={controls}
              variants={pathVariants}
              custom={index + 1}
            />
          ))}
        </svg>
      </div>
    </ToolTip>
  )
}

export {SunIcon}