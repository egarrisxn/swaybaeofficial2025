'use client'
import {useEffect, useRef, useState} from 'react'

export function SwaysButton({text}) {
  const ref = useRef(null)
  const [mousePosition, setMousePosition] = useState({x: '-100%', y: '-100%'})

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      setMousePosition({x: `${x}px`, y: `${y}px`})
    }
    document.addEventListener('mousemove', handleMouseMove)
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <button
      className='relative ml-[-8px] w-full max-w-lg transform overflow-hidden rounded-lg border bg-[#e5e7eb] transition-transform ease-in-out active:scale-90'
      ref={ref}
    >
      <span
        className={`absolute z-0 h-28 w-28 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(#fb3be1_0%,transparent_70%)]`}
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      ></span>
      <div className='relative z-10 m-[2px] rounded-[calc(0.5rem-1px)] bg-white/90 py-3 text-sm font-medium text-[#fb3be1] backdrop-blur-sm'>
        {text}
      </div>
    </button>
  )
}
