'use client'
import {useCallback} from 'react'
import {useTheme} from 'next-themes'
import {MoonIcon} from './moon-icon'
import {SunIcon} from './sun-icon'
import {Tooltip} from '@/components/ui/tooltip'

export default function ThemeToggle() {
  const {resolvedTheme, setTheme} = useTheme()
  const handleToggleTheme = useCallback(() => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
  }, [resolvedTheme, setTheme])

  return (
    <button onClick={handleToggleTheme} aria-label='Toggle Theme'>
      <Tooltip direction='bottom' text={resolvedTheme === 'light' ? 'Dark' : 'Light'}>
        {resolvedTheme === 'light' ? <MoonIcon /> : <SunIcon />}
      </Tooltip>
    </button>
  )
}
