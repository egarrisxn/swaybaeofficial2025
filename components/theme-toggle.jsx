'use client'
import {useTheme} from 'next-themes'
import {useCallback} from 'react'
import {GiMoonOrbit, GiStripedSun} from 'react-icons/gi'
import {Button} from '@/components/ui/button'
import {Tooltip} from '@/components/ui/tooltip'

export default function ThemeToggle() {
  const {resolvedTheme, setTheme} = useTheme()
  const handleToggleTheme = useCallback(() => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
  }, [resolvedTheme, setTheme])
  return (
    <Button onClick={handleToggleTheme} variant='ghost' size='icon' aria-label='Toggle Theme'>
      <Tooltip direction='bottom' text={resolvedTheme === 'light' ? 'Dark' : 'Light'}>
        {resolvedTheme === 'light' ? <GiMoonOrbit /> : <GiStripedSun />}
      </Tooltip>
    </Button>
  )
}

// import {GiMoon, GiSun} from 'react-icons/gi'
// import {PiSunHorizonBold, PiSunHorizonFill} from 'react-icons/pi'
// import {GiSunSpear, GiMoonOrbit} from 'react-icons/gi'
// import {GiMoonBats, GiStripedSun} from 'react-icons/gi'
