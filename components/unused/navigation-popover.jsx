'use client'
import React from 'react'
import {
  PopoverBody,
  PopoverButton,
  PopoverContent,
  PopoverRoot,
  PopoverTrigger,
} from '@/components/ui/popover'

const PopoverNavigation = () => {
  const navLinks = [
    {href: '/about', label: 'About'},
    {href: '/calendar', label: 'Calendar'},
    {href: '/community', label: 'Community'},
    {href: '/blog', label: 'Blog'},
    {href: '/contact', label: 'Contact'},
    {href: '/social', label: 'Social'},
    {href: '/media-kit', label: 'Media Kit'},
    {href: '/faq', label: 'FAQ'},
    {href: 'https://shop.swaybae.net/', label: 'Store', external: true},
  ]

  return (
    <PopoverRoot>
      <PopoverTrigger>X</PopoverTrigger>
      <PopoverContent>
        <PopoverBody>
          {navLinks.map((link, index) => (
            <PopoverButton
              key={index}
              onClick={() => {
                if (link.external) {
                  window.open(link.href, '_blank', 'noopener noreferrer')
                } else {
                  window.location.href = link.href
                }
              }}
            >
              {link.label}
            </PopoverButton>
          ))}
        </PopoverBody>
      </PopoverContent>
    </PopoverRoot>
  )
}

export function NavigationPopover() {
  return (
    <div className='p-8'>
      <PopoverNavigation />
    </div>
  )
}
