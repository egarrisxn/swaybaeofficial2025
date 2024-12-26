import Image from 'next/image'

export const BrandCard = ({img, href}) => {
  return (
    <div className='relative w-24 cursor-pointer overflow-hidden p-3 transition-transform duration-300 hover:scale-105 md:w-32 lg:w-40 lg:px-4 2xl:w-44 2xl:px-6'>
      <a href={href} target='_blank' rel='noreferrer noopener'>
        <Image
          width='180'
          height='180'
          alt='brand logo'
          src={img}
          className='transition-opacity duration-300 hover:opacity-80'
        />
      </a>
    </div>
  )
}
