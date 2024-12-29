'use client'
import {TweetGrid} from '@/components/ui/tweet-grid'

const tweets = [
  '1864408798363877686',
  '1860055259458208144',
  '1857090484671217807',
  '1854166093637587390',
  '1849671142249746535',
  '1849656071335313490',
  '1849484412745880015',
  '1847413898145632618',
  '1845964584902861302',
  '1843079756717474218',
  '1842599642627989733',
]

export function TwitterGrid({}) {
  return (
    <div className='max-w-xl pb-12 md:max-w-4xl'>
      <div className='flex w-full items-center justify-center'>
        <TweetGrid className='w-full' tweets={tweets} columns={2} spacing='lg' />
      </div>
    </div>
  )
}
