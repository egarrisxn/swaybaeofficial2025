export const SocialCard = ({title, subtitle, Icon, href, width, height}) => {
  return (
    <a
      className='group relative min-w-28 overflow-hidden rounded-md bg-white px-2 py-3 shadow-lg drop-shadow-sm sm:min-w-32 lg:min-w-40 lg:px-4 lg:py-6 xl:min-w-44 2xl:min-w-48'
      href={href}
      rel='noopener noreferrer'
      target='_blank'
    >
      <div className='absolute inset-0 translate-y-[100%] bg-gradient-to-r from-pink-600 to-purple-600 transition-transform duration-300 group-hover:translate-y-[0%]' />
      <Icon
        width={144}
        height={144}
        className='absolute -right-12 -top-12 z-0 stroke-slate-600 stroke-2 text-9xl text-slate-100 opacity-50 transition-transform duration-300 group-hover:rotate-12 group-hover:stroke-violet-400 group-hover:opacity-100'
      />
      <Icon
        width={24}
        height={24}
        className='relative z-10 mb-2 text-xl text-violet-600 transition-colors duration-300 group-hover:text-white'
      />
      <div className='relative z-10 text-sm font-medium text-slate-950 duration-300 group-hover:text-white sm:text-base'>
        {title}
      </div>
      <p className='relative z-10 text-xs text-slate-400 duration-300 group-hover:text-violet-200 sm:text-sm'>
        {subtitle}
      </p>
    </a>
  )
}
