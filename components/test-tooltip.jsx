// import * as Tooltip from '@radix-ui/react-tooltip'
// import {PlusIcon} from '@radix-ui/react-icons'

// const NAME = 'Tooltip'

// const ToolTip = ({children, text, ...otherProps}) => {
//   return (
//     <Tooltip.Provider>
//       <Tooltip.Root>
//         <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
//         <Tooltip.Portal>
//           <Tooltip.Content
//             className='data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade r z-50 min-w-max select-none rounded bg-foreground px-2 py-1 text-xs leading-none text-background shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity] 2xl:px-3 2xl:py-1.5 2xl:text-base'
//             sideOffset={5}
//             {...otherProps}
//           >
//             {text}
//             <Tooltip.Arrow className='fill-foreground' />
//           </Tooltip.Content>
//         </Tooltip.Portal>
//       </Tooltip.Root>
//     </Tooltip.Provider>
//   )
// }

// Tooltip.displayName = NAME

// export {ToolTip}

// export default function TooltipDemo() {
//   return (
//     <div>
//       <ToolTip text={'Plus Icon'}>
//         <PlusIcon />
//       </ToolTip>
//     </div>
//   )
// }