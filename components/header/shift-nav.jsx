'use client'
import {useState} from 'react'
import {cn} from '@/lib/utils'

const Button = ({item, index, activeIndex, onTabClick}) => {
  return (
    <div
      className={cn('rounded-lg bg-foreground', {
        'border-b-2 border-border': index === activeIndex,
      })}
      onClick={onTabClick}
    >
      <div
        className={cn(
          'flex h-10 cursor-pointer items-center justify-center rounded-md border-2 bg-background p-3 transition-all',
          {
            'border border-indigo-500 text-indigo-600': index === activeIndex,
            'origin-top-right ease-in hover:rotate-6': index !== activeIndex,
          },
        )}
      >
        <p className='p-2 text-center'>{item}</p>
      </div>
    </div>
  )
}

export function ShiftNav({items}) {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className='flex w-full flex-wrap items-center justify-center gap-4'>
      {items.map((item, index) => (
        <Button
          onTabClick={() => {
            setActiveTab(index)
          }}
          item={item}
          activeIndex={activeTab}
          index={index}
          key={`shift_tab_${index}`}
        />
      ))}
    </div>
  )
}
