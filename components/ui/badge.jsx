import * as React from 'react'
import {cva} from 'class-variance-authority'
import {cn} from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex drop-shadow-md items-center border whitespace-nowrap px-1 transition-colors focus:outline-none focus:ring-0',
  {
    variants: {
      variant: {
        default: 'rounded-full border-transparent bg-primary hover:bg-primary',
        time: 'rounded-sm w-fit mt-0.5 border-transparent tracking-tight bg-slate-100 dark:bg-slate-800 text-foreground line-clamp-1',
        tag: 'rounded-xl py-0.5 text-black border-transparent min-w-content max-w-full tracking-tighter text-xs font-semibold',
        outline: 'text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

function Badge({className, variant, ...props}) {
  return <div className={cn(badgeVariants({variant}), className)} {...props} />
}

export {Badge, badgeVariants}
