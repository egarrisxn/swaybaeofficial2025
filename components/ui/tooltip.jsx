import * as Tooltip from '@radix-ui/react-tooltip'

const ToolTip = ({children, text, ...otherProps}) => {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className='data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade r z-50 min-w-max select-none rounded bg-foreground px-2 py-1 text-xs leading-none text-background shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity] 2xl:px-3 2xl:py-1.5 2xl:text-base'
            sideOffset={5}
            {...otherProps}
          >
            {text}
            <Tooltip.Arrow className='fill-foreground' />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}

ToolTip.displayName = 'ToolTip'

export {ToolTip}

// 'use client'
// import * as React from 'react'

// const NAME = 'Tooltip'

// const Tooltip = React.forwardRef(({children, text, direction = 'top', ...otherProps}, ref) => {
//   const getTooltipClasses = () => {
//     let baseClasses =
//       'absolute z-50 opacity-0 pointer-events-none rounded-md border bg-foreground px-2 py-1 min-w-max text-xs text-background shadow-md 2xl:px-3 2xl:py-1.5 2xl:text-base transition-all duration-100 transform'

//     switch (direction) {
//       case 'left':
//         return `${baseClasses} top-1/2 left-0 translate-x-[-100%] translate-y-[-50%]`
//       case 'right':
//         return `${baseClasses} top-1/2 right-0 translate-x-[100%] translate-y-[-50%]`
//       case 'bottom':
//         return `${baseClasses} left-1/2 top-full translate-x-[-50%] translate-y-[10px]`
//       case 'top':
//       default:
//         return `${baseClasses} left-1/2 bottom-full translate-x-[-50%] translate-y-[-10px]`
//     }
//   }

//   return (
//     <span className='group relative' {...otherProps} ref={ref}>
//       {React.Children.map(children, (child) =>
//         React.isValidElement(child)
//           ? React.cloneElement(child, {
//               'aria-label': text,
//               ref: child.ref || ref,
//             })
//           : child,
//       )}
//       <span
//         className={getTooltipClasses() + ' group-hover:pointer-events-auto group-hover:opacity-100'}
//         data-label={text}
//       >
//         {text}
//       </span>
//     </span>
//   )
// })

// Tooltip.displayName = NAME

// export {Tooltip}
