import {PhotoGrid} from '@/components/photo-grid'

export default function PhotosSection() {
  return (
    <section className='border-4'>
      <div className='container mx-auto my-24 grid max-w-7xl grid-cols-1 justify-center p-4'>
        <PhotoGrid />
      </div>
    </section>
  )
}
