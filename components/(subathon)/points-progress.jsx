'use client'
import {Progress} from '@/components/ui/progress'
import {Card} from '@/components/ui/card'

export function PointsProgress({currentPoints, nextGoalPoints}) {
  const progress = (currentPoints / nextGoalPoints) * 100

  return (
    <Card className='space-y-4 bg-white/80 p-5 backdrop-blur-sm md:p-6 dark:bg-black/80'>
      <div className='flex items-center justify-between'>
        <h2 className='text-xl font-bold md:text-2xl'>Current Progress</h2>
        <span className='text-lg font-semibold text-purple-600 md:text-xl'>
          {currentPoints.toLocaleString()} / {nextGoalPoints.toLocaleString()} points
        </span>
      </div>

      <Progress value={progress} className='h-3 md:h-4' />

      <div className='text-center text-sm text-muted-foreground'>
        {Math.ceil(nextGoalPoints - currentPoints).toLocaleString()} points until next goal
      </div>
    </Card>
  )
}
