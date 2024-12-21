import {cn} from '@/lib/utils'
import {Slot} from '@radix-ui/react-slot'
import {cva} from 'class-variance-authority'
import * as React from 'react'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline:
          'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        ghost:
          'hover:text-primary transition-all duration-300 ease-in-out focus-visible:ring-0 focus-visible:ring-offset-0',
        link: 'text-primary hover:underline-offset-4 hover:underline',
        main: 'bg-white text-black shadow-md hover:bg-primary hover:text-accent-foreground border-input md:text-sm rounded-3xl uppercase leading-relaxed',
        icon: 'bg-background border shadow-md shadow-[hsla(0,0%,0%,.4)] drop-shadow transition-all duration-200 ease-in-out rounded-3xl border-foreground/30 dark:bg-slate-800/80 hover:bg-slate-100 hover:shadow-[rgba(0,0,0,..5)] dark:shadow-[rgba(175,230,255,0.1)] dark:hover:bg-slate-700/80 dark:hover:shadow-slate-100/30',
        pretty:
          'rounded-3xl border-none bg-gradient-to-br from-[#0075ff] via-[#00bfff] to-[#0075ff] bg-[length:280%_auto] text-white shadow-[0px_0px_20px_rgba(71,184,255,0.5),0px_5px_5px_-1px_rgba(58,125,233,0.25),inset_4px_4px_8px_rgba(175,230,255,0.5),inset_-4px_-4px_8px_rgba(19,95,216,0.35)] transition-all duration-100 hover:bg-[right_top]  focus:shadow-[0_0_0_3px_white,0_0_0_6px_#0075ff] focus:outline-none',
        bubble:
          'border-2 border-black -ml-0.5 -mt-0.5 rounded-3xl text-black bg-white uppercase leading-relaxed transition-all hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 shadow-[4px_4px_0px_black] hover:shadow-[1.5px_1.5px_0px_black] active:shadow-[0px_0px_0px_black] dark:shadow-[4px_4px_0px_grey] dark:hover:shadow-[1.5px_1.5px_0px_grey] dark:active:shadow-[0px_0px_0px_grey]',
      },
      size: {
        default: 'h-9 px-4 py-2',
        defaulty: 'w-full max-w-sm py-2 md:px-4 md:py-2.5 2xl:py-4',
        link: 'max-w-xs',
        stubby: 'px-6 py-3',
        fat: 'h-12 w-full max-w-[280px]',
        icon: 'p-2',
        xs: 'h-9 w-full max-w-xs',
        sm: 'h-8 rounded-md px-3 text-xs',
        md: 'h-12 w-full rounded-3xl max-w-md',
        lg: 'h-12 w-full max-w-lg',
        xl: 'h-12 rounded-md w-full text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

const Button = React.forwardRef(({className, variant, size, asChild = false, ...props}, ref) => {
  const Comp = asChild ? Slot : 'button'
  return <Comp className={cn(buttonVariants({variant, size, className}))} ref={ref} {...props} />
})
Button.displayName = 'Button'

export {Button, buttonVariants}
