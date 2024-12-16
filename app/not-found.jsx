import Link from 'next/link'
import {Button} from '@/components/ui/button'

export const metadata = {
  title: 'Page Not Found',
}

export default function NotFound() {
  return (
    <div className='mx-auto grid grid-cols-1 place-items-center gap-4 pt-40 text-3xl'>
      <h1>Page Not Found.</h1>
      <Button asChild>
        <Link href='/'>Home</Link>
      </Button>
    </div>
  )
}
