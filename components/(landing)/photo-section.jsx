import {PhotoGrid} from '@/components/photo-grid'

export default function PhotosSection() {
  return (
    <section>
      <div className='mx-auto my-8 flex justify-center px-4'>
        <div className='grid grid-cols-1'>
          <PhotoGrid />
        </div>
      </div>
    </section>
  )
}
