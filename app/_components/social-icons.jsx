import {TooltipButton} from '@/components/tooltip-button'
import {socials} from '@/lib/data'

export function SocialIcons() {
  return (
    <>
      {socials.map((social) => (
        <TooltipButton
          href={social.href}
          key={social.title}
          Icon={social.Icon}
          size='icon'
          title={social.title}
          variant='icon'
        />
      ))}
    </>
  )
}
