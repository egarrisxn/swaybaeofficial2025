import {PhotoGrid} from '@/components/photo-grid'

export default function PhotosSection() {
  return (
    <section className='border-4 border-white pt-12 dark:border-black'>
      <div className='container mx-auto my-24 max-w-screen-2xl border-2 px-4'>
        <div className='grid grid-cols-1'>
          <PhotoGrid />
        </div>
      </div>
    </section>
  )
}