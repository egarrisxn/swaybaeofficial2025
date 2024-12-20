import Link from 'next/link'
import Image from 'next/image'
import {MoveRight} from 'lucide-react'
import {Button} from '@/components/ui/button'
import {CustomButton} from '@/components/custom-button'

export default function BlogSection() {
  return (
    <section className='border-4 border-white pt-12 dark:border-black'>
      <div className='container mx-auto mt-24 max-w-7xl border-2 px-4 lg:mt-0'>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
          {/* Image Section */}
          <aside className='relative order-2 flex justify-center border-2 pt-12 md:order-1 md:justify-end'>
            <Image
              src='/images/blogpicture.png'
              alt='Another cutout photo of Sway'
              width={850}
              height={1400}
              className='h-auto max-w-[75%] md:max-w-full'
            />
          </aside>

          {/* Text Section */}
          <article className='order-1 flex flex-col gap-3 border-2 p-4 md:order-2 md:mb-24 md:gap-6 md:pt-24 lg:mb-0'>
            <h6 className='text-center font-semibold uppercase tracking-wide text-gray-700 md:text-start lg:text-center dark:text-neutral-100'>
              Latest Blog Posts
            </h6>
            <div className='mt-2 border-b-2 pb-8 md:pb-4 lg:p-8'>
              <div className='group flex flex-row justify-between gap-2 font-extralight tracking-widest md:text-lg'>
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
            <div className='mt-2 border-b-2 pb-8 md:pb-4 lg:p-8'>
              <div className='group flex flex-row justify-between gap-2 font-extralight tracking-widest md:text-lg'>
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
              <CustomButton text={'Read More!'} />
              <Button asChild variant='bubble' size='md'>
                <Link href='/blog'>Read More!</Link>
              </Button>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
