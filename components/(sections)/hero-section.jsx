import {BackgroundMedia} from '@/components/ui/bg-media'

export default function HeroSection() {
  return (
    <section className='w-full'>
      <BackgroundMedia type='video' variant='dark' src='/videos/theherovideo.mp4' />
      <div className='absolute inset-0 top-0 z-20 flex h-screen items-center justify-center'>
        <div className='max-w-xl text-center font-extrabold leading-none tracking-tighter text-white'>
          <h1 className='text-xl italic lg:text-5xl'>Creator of Chaos</h1>
        </div>
      </div>
    </section>
  )
}
