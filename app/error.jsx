'use client'
import {useEffect} from 'react'
import {Button} from '@/components/ui/button'

export default function Error({error, reset}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className='mx-auto grid grid-cols-1 place-items-center gap-4 pt-40 text-3xl'>
      <h1>Something went wrong!</h1>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  )
}
