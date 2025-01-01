'use client'
import {useState} from 'react'

export function NewNav() {
  const [menuActive, setMenuActive] = useState(false)

  const toggleMenu = () => {
    setMenuActive(!menuActive)
  }

  return (
    <div>
      {/* Toggle Button */}
      {/* <div className='fixed left-10 top-10 z-50'> */}
      <div className='fixed left-10 top-20 z-50'>
        <a
          onClick={toggleMenu}
          className='cursor-pointer rounded-full border border-yellow-500 bg-blue-500 px-4 py-2 text-2xl text-yellow-500'
        >
          X
        </a>
      </div>

      {/* Menu */}
      <div
        className={`fixed left-0 top-0 z-40 h-full w-full bg-white transition-transform duration-500 ${
          menuActive ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <ul className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform space-y-4 text-center'>
          <li>
            <a href='#' className='text-3xl uppercase text-gray-800 hover:bg-yellow-300'>
              Home
            </a>
          </li>
          <li>
            <a href='#' className='text-3xl uppercase text-gray-800 hover:bg-yellow-300'>
              About
            </a>
          </li>
          <li>
            <a href='#' className='text-3xl uppercase text-gray-800 hover:bg-yellow-300'>
              Services
            </a>
          </li>
          <li>
            <a href='#' className='text-3xl uppercase text-gray-800 hover:bg-yellow-300'>
              Portfolio
            </a>
          </li>
          <li>
            <a href='#' className='text-3xl uppercase text-gray-800 hover:bg-yellow-300'>
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
