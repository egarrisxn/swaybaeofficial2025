import {CardStack} from '@/components/ui/card-stack'
import {merch} from '@/lib/data'

export function StackedCards() {
  return (
    <div className='grid w-full place-items-center'>
      <CardStack items={merch} />
    </div>
  )
}
