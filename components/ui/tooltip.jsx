// "use client"
// import { cn } from "@/lib/utils"
// import * as TooltipPrimitive from "@radix-ui/react-tooltip"
// import * as React from "react"

// const TooltipProvider = TooltipPrimitive.Provider
// const Tooltip = TooltipPrimitive.Root
// const TooltipTrigger = TooltipPrimitive.Trigger
// const TooltipContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => (
//   <TooltipPrimitive.Portal>
//     <TooltipPrimitive.Content
//       ref={ref}
//       sideOffset={sideOffset}
//       className={cn(
//         "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
//         className
//       )}
//       {...props} />
//   </TooltipPrimitive.Portal>
// ))
// TooltipContent.displayName = TooltipPrimitive.Content.displayName

// export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger }


'use client'
import * as React from 'react'

const Tooltip = React.forwardRef(({children, text, direction = 'top', ...otherProps}, ref) => {
  const getTooltipClasses = () => {
    let baseClasses =
      'absolute z-50 opacity-0 pointer-events-none rounded-md border bg-foreground px-2 py-1 min-w-max text-xs text-background shadow-md 2xl:px-3 2xl:py-1.5 2xl:text-base transition-all duration-100 transform'

    switch (direction) {
      case 'left':
        return `${baseClasses} top-1/2 left-0 translate-x-[-100%] translate-y-[-50%]`
      case 'right':
        return `${baseClasses} top-1/2 right-0 translate-x-[100%] translate-y-[-50%]`
      case 'bottom':
        return `${baseClasses} left-1/2 top-full translate-x-[-50%] translate-y-[10px]`
      case 'top':
      default:
        return `${baseClasses} left-1/2 bottom-full translate-x-[-50%] translate-y-[-10px]`
    }
  }

  return (
    <span className='group relative' {...otherProps} ref={ref}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, {
              'aria-label': text,
              ref: child.ref || ref,
            })
          : child,
      )}
      <span
        className={getTooltipClasses() + ' group-hover:pointer-events-auto group-hover:opacity-100'}
        data-label={text}
      >
        {text}
      </span>
    </span>
  )
})

Tooltip.displayName = 'Tooltip'

export { Tooltip }

