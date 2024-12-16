export const SocialCard = ({title, subtitle, Icon, href}) => {
  return (
    <a
      className='border-1 group relative min-w-40 overflow-hidden rounded-md border-slate-300 bg-white px-4 py-6 shadow-md drop-shadow-sm'
      href={href}
      rel='noopener noreferrer'
      target='_blank'
    >
      <div className='absolute inset-0 translate-y-[100%] bg-gradient-to-r from-pink-600 to-purple-600 transition-transform duration-300 group-hover:translate-y-[0%]' />
      <Icon className='absolute -right-12 -top-12 z-10 text-9xl text-slate-100 transition-transform duration-300 group-hover:rotate-12 group-hover:text-violet-400' />
      <Icon className='relative z-10 mb-2 text-xl text-violet-600 transition-colors duration-300 group-hover:text-white' />
      <div className='relative z-10 font-medium text-slate-950 duration-300 group-hover:text-white'>
        {title}
      </div>
      <p className='relative z-10 text-sm text-slate-400 duration-300 group-hover:text-violet-200'>
        {subtitle}
      </p>
    </a>
  )
}
