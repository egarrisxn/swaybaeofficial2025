'use client'
import { useState } from 'react'
import Link from 'next/link'

const MenuToggler = ({
  isOpen,
  onChange,
  backgroundColor,
  itemColor,
  animationDuration,
  togglerSize,
  itemSize,
}) => {
  const lineHeight = itemSize * 0.1
  const lineWidth = itemSize * 0.8
  const lineSpacing = itemSize * 0.25

  return (
    <>
      <input
        id='menu-toggler'
        type='checkbox'
        checked={isOpen}
        onChange={onChange}
        className='absolute inset-0 z-10 m-auto cursor-pointer opacity-0'
        style={{ width: togglerSize, height: togglerSize }}
      />
      <label
        htmlFor='menu-toggler'
        className='absolute inset-0 z-20 m-auto flex cursor-pointer items-center justify-center rounded-full transition-all'
        style={{
          backgroundColor,
          color: itemColor,
          transitionDuration: `${animationDuration}ms`,
          width: togglerSize,
          height: togglerSize,
        }}
      >
        <span
          className='relative flex flex-col items-center justify-center'
          style={{ width: itemSize, height: itemSize }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`absolute bg-current transition-all ${
                isOpen && i === 0
                  ? 'opacity-0'
                  : isOpen
                    ? `${i === 1 ? 'rotate-45' : '-rotate-45'}`
                    : ''
              }`}
              style={{
                transitionDuration: `${animationDuration}ms`,
                width: lineWidth,
                height: lineHeight,
                top: isOpen
                  ? `calc(50% - ${lineHeight / 2}px)`
                  : `calc(50% + ${(i - 1) * lineSpacing}px - ${lineHeight / 2}px)`,
              }}
            />
          ))}
        </span>
      </label>
    </>
  )
}

const MenuItem = ({
  item,
  index,
  isOpen,
  animationDuration,
  itemCount,
  toggleSize,
}) => {
    const startAngle = 0;
    const endAngle = 90;
    const angleRange = endAngle - startAngle;
    const itemAngle = startAngle + (angleRange / (itemCount - 1)) * index;
    const translateX = toggleSize + 15;
    const textWidth = toggleSize + 0;
    const textHeight = toggleSize - 60;

  return (
    <li
      className={`absolute inset-0 m-auto transition-all ${
        isOpen ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        width: textWidth,
        height: textHeight,
        transform: isOpen
          ? `rotate(${itemAngle}deg) translateX(-${translateX}px)`
          : 'none',
        transitionDuration: `${animationDuration}ms`,
      }}
    >
      <Link
        href={item.href}
        className={`flex h-full w-full items-center justify-end opacity-60 transition-all duration-100 ${
          isOpen ? 'pointer-events-auto' : 'pointer-events-none'
        } group hover:opacity-100`}
        style={{
          transitionDuration: `${animationDuration}ms`,
        }}
      >
          <span
              className="relative flex items-center justify-center"
              style={{transform: `translateX(${isOpen ? 0 : -10}px) rotate(-${itemAngle}deg)`}}
          >
              <span className="text-2xl font-bold border rounded-3xl bg-red-500/10 pl-1 tracking-[0.7rem] leading-[1rem] transition-transform duration-200" style={{transform: `rotate(${itemAngle}deg)`}}>{item.text}</span>
          </span>
      </Link>
    </li>
  )
}

export default function FlowerMenu({
  menuItems,
  itemColor = 'white',
  backgroundColor = 'rgba(0,0,0)',
  animationDuration = 700,
  togglerSize = 60,
}) {
  const [isOpen, setIsOpen] = useState(false)
  const itemCount = menuItems.length
  const toggleSize = togglerSize * 1
  const itemSize = Math.max(24, Math.floor(togglerSize * 0.5))
  const containerSize = togglerSize * 2;

  return (
    <nav className='relative' style={{width: containerSize, height: containerSize}}>
      <MenuToggler
        isOpen={isOpen}
        onChange={() => setIsOpen(!isOpen)}
        backgroundColor={backgroundColor}
        itemColor={itemColor}
        animationDuration={animationDuration}
        togglerSize={togglerSize}
        itemSize={itemSize}
      />
      <ul className='absolute inset-0 m-0 h-full w-full list-none p-0'>
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            item={item}
            index={index}
            isOpen={isOpen}
            animationDuration={animationDuration}
            itemCount={itemCount}
            toggleSize={toggleSize}
            itemSize={itemSize}
          />
        ))}
      </ul>
    </nav>
  )
}