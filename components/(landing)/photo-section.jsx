import {PhotoGrid} from '@/components/photo-grid'

export default function PhotosSection() {
  return (
    // <section className='border-4 border-white pt-12 dark:border-black'>
    <section className='x'>
      <div className='mx-auto my-8 flex justify-center px-4'>
        <div className='grid grid-cols-1'>
          <PhotoGrid />
        </div>
      </div>
    </section>
  )
}
