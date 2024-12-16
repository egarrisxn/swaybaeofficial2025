import Link from 'next/link'
import Image from 'next/image'
import {MoveRight} from 'lucide-react'
import {Button} from '@/components/ui/button'
import {SwaysButton} from '@/components/sways-button'

export default function BlogSection() {
  return (
    <section className='border-4'>
      <div className='container mx-auto mt-24 grid max-w-2xl grid-cols-1 justify-center gap-8 px-4 pt-4 lg:max-w-7xl lg:grid-cols-2 lg:gap-6 xl:gap-12'>
        <aside className='order-2 mx-auto flex px-4 pt-4 lg:order-1'>
          <Image
            src='/images/blogpicture.png'
            alt='Another cutout photo of Sway'
            width={400}
            height={800}
            quality={100}
            priority={true}
            className='mb-0 inline-block max-w-full overflow-clip'
          />
        </aside>
        <article className='order-1 flex flex-col gap-4 p-4 lg:order-2'>
          <span className='text-center text-sm uppercase leading-loose tracking-wider lg:text-lg'>
            Latest Blog Posts.
          </span>
          <div className='mt-2 border-b-2 p-8'>
            <div className='group flex flex-row justify-between gap-2 text-lg font-thin tracking-widest'>
              <div className='p-1'>
                <p>#2</p>
              </div>
              <div className='flex-1 p-1 group-hover:underline group-hover:underline-offset-4'>
                <p>The best FREE Ways to Support Your Favorite Content Creators!</p>
              </div>
              <div className='flex items-center p-1'>
                <MoveRight
                  size={16}
                  className='-translate-x-1 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:scale-x-105'
                />
              </div>
            </div>
          </div>
          <div className='mt-2 border-b-2 p-8'>
            <div className='group flex flex-row justify-between gap-2 text-lg font-thin tracking-widest'>
              <div className='p-1'>
                <p>#1</p>
              </div>
              <div className='flex-1 p-1 group-hover:underline group-hover:underline-offset-4'>
                <p>Sway Starts a BLOG!</p>
              </div>
              <div className='flex items-center p-1'>
                <MoveRight
                  size={16}
                  className='-translate-x-1 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:scale-x-105'
                />
              </div>
            </div>
          </div>
          <div className='mt-8 flex flex-col items-center justify-center gap-4'>
            <SwaysButton text={'Read More!'} />
            <Button asChild variant='bubble' size='md' className='mt-4'>
              <Link href='/blog'>Read More!</Link>
            </Button>
          </div>
        </article>
      </div>
    </section>
  )
}
