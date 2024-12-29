'use client'
import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import {cn} from '@/lib/utils'
import {ChevronDown} from '@/components/(icons)/chevron-down'

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef(({className, ...props}, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn('border-b', className)} {...props} />
))
AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger = React.forwardRef(({className, children, ...props}, ref) => (
  <AccordionPrimitive.Header className='flex'>
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'flex flex-1 items-center justify-between py-4 text-left text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDown className='h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200' />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef(({className, children, ...props}, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className='data-[state=closed]:animate-accordionUp data-[state=open]:animate-accordionDown overflow-hidden text-sm'
    {...props}
  >
    <div className={cn('pb-4 pt-0', className)}>{children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export {Accordion, AccordionItem, AccordionTrigger, AccordionContent}
