import {TooltipButton} from '@/components/tooltip-button'
import {socialInfo} from '@/lib/data'

export function SocialIcons() {
  return (
    <>
      {socialInfo.map((social) => (
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
