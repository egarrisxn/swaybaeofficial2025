import {ToolTip} from './ui/tooltip'
import {Button} from './ui/button'

export const TooltipButton = ({className, href, Icon, size, title, variant}) => {
  return (
    <ToolTip text={title}>
      <Button variant={variant} size={size} className={className}>
        <a href={href} rel='noopener noreferrer' target='_blank'>
          <Icon />
        </a>
      </Button>
    </ToolTip>
  )
}
