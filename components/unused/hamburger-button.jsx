'use client'
import {useState, useEffect, forwardRef} from 'react'
import {MotionConfig, motion} from 'motion/react'

const HamburgerButton = forwardRef(({onClick, open}, ref) => {
  return <AnimatedHamburgerButton ref={ref} onClick={onClick} open={open} />
})

const AnimatedHamburgerButton = forwardRef(({onClick, open}, ref) => {
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (!open) {
      setActive(false)
    }
  }, [open])

  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: 'easeInOut',
      }}
    >
      <motion.button
        ref={ref}
        initial={false}
        animate={active ? 'open' : 'closed'}
        onClick={(e) => {
          e.preventDefault()
          setActive((prev) => !prev)
          if (onClick) onClick(e)
        }}
        className='group relative size-14 bg-transparent transition-colors'
      >
        <motion.span
          variants={VARIANTS.top}
          className='absolute h-1 w-10 bg-foreground group-hover:bg-primary'
          style={{y: '-50%', left: '50%', x: '-50%', top: '40%'}}
        />
        <motion.span
          variants={VARIANTS.middle}
          className='absolute h-1 w-10 bg-foreground group-hover:bg-primary'
          style={{left: '50%', x: '-50%', top: '50%', y: '-50%'}}
        />
        <motion.span
          variants={VARIANTS.bottom}
          className='absolute h-1 w-5 bg-foreground group-hover:bg-primary'
          style={{
            x: '-50%',
            y: '50%',
            bottom: '40%',
            left: 'calc(50% + 10px)',
          }}
        />
      </motion.button>
    </MotionConfig>
  )
})

HamburgerButton.displayName = 'HamburgerButton'
AnimatedHamburgerButton.displayName = 'AnimatedHamburgerButton'

const VARIANTS = {
  top: {
    open: {
      rotate: ['0deg', '0deg', '45deg'],
      top: ['35%', '50%', '50%'],
    },
    closed: {
      rotate: ['45deg', '0deg', '0deg'],
      top: ['50%', '50%', '35%'],
    },
  },
  middle: {
    open: {
      rotate: ['0deg', '0deg', '-45deg'],
    },
    closed: {
      rotate: ['-45deg', '0deg', '0deg'],
    },
  },
  bottom: {
    open: {
      rotate: ['0deg', '0deg', '45deg'],
      bottom: ['35%', '50%', '50%'],
      left: '50%',
    },
    closed: {
      rotate: ['45deg', '0deg', '0deg'],
      bottom: ['50%', '50%', '35%'],
      left: 'calc(50% + 10px)',
    },
  },
}

export default HamburgerButton
