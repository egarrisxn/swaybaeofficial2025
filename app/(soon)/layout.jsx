import ThemeToggle from '../_components/theme-toggle'

export default function ComingSoonLayout({children}) {
  return (
    <div className='size-full'>
      {/* HEADER */}
      <div className='absolute right-5 top-5'>
        <ThemeToggle />
      </div>

      {/* MAIN */}
      <div>{children}</div>

      <div className='absolute bottom-5 z-20 flex w-full justify-center'>
        <p className='bg-gradient-to-bl from-primary to-secondary bg-clip-text font-semibold tracking-tight text-transparent lg:text-lg'>
          © 2024 Sway Bae. All rights reserved.
        </p>
      </div>
    </div>
  )
}
