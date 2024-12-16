import Image from 'next/image'

export const BrandCard = ({img, href}) => {
  return (
    <div className='relative w-48 cursor-pointer overflow-hidden p-4 transition-transform duration-300 hover:scale-105'>
      <a href={href} target='_blank' rel='noreferrer noopener'>
        <Image
          width='150'
          height='150'
          alt='brand logo'
          src={img}
          className='transition-opacity duration-300 hover:opacity-80'
        />
      </a>
    </div>
  )
}
