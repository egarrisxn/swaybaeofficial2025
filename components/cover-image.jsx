import {stegaClean} from '@sanity/client/stega'
import {Image} from 'next-sanity/image'
import {urlFor} from '@/lib/sanity/client'

export default function CoverImage(props) {
  const {image: source, priority} = props
  const image = source?.asset?._ref ? (
    <Image
      className='rounded-2xl object-cover shadow-md transition-shadow'
      fill={true}
      alt={stegaClean(source?.alt) || ''}
      src={urlFor(source)?.height(720).width(1280).auto('format').url()}
      sizes='100vw'
      priority={priority}
    />
  ) : (
    <div className='bg-slate-50' style={{paddingTop: '100%'}} />
  )

  return <div className='relative aspect-video'>{image}</div>
}
