import Image from 'next/image'

export const BrandCard = ({img, href}) => {
  return (
    <div className='relative w-24 cursor-pointer overflow-hidden px-3 py-1 transition-transform duration-300 hover:scale-105 md:w-32 lg:w-40 lg:px-4 2xl:w-48 2xl:px-6'>
      <a href={href} target='_blank' rel='noreferrer noopener'>
        <Image
          width='192'
          height='192'
          alt='brand logo'
          src={img}
          className='transition-opacity duration-300 hover:opacity-80'
        />
      </a>
    </div>
  )
}
