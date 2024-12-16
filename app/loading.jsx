import {Loader} from '@/components/loader'

export default function Loading() {
  return (
    <div className='mx-auto grid grid-cols-1 place-items-center gap-4 pt-40 text-3xl'>
      <h1>Loading</h1>
      <Loader />
    </div>
  )
}
