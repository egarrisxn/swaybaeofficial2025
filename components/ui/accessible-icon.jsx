import * as React from 'react'
import * as VisuallyHiddenPrimitive from '@radix-ui/react-visually-hidden'

const AccessibleIcon = ({children, label}) => {
  const child = React.Children.only(children)
  return (
    <>
      {React.cloneElement(child, {
        'aria-hidden': 'true',
        focusable: 'false', // See: https://allyjs.io/tutorials/focusing-in-svg.html#making-svg-elements-focusable
      })}
      <VisuallyHiddenPrimitive.Root>{label}</VisuallyHiddenPrimitive.Root>
    </>
  )
}

AccessibleIcon.displayName = 'AccessibleIcon'

export {AccessibleIcon}
