import LandingHeader from '@/components/landing-header'
import LandingFooter from '@/components/landing-footer'

export default function IndexLayout({children}) {
  return (
    <div className='relative grid min-h-[100dvh] w-full grid-rows-[auto_1fr_auto] overscroll-contain'>
      {/* HEADER */}
      <LandingHeader />

      {/* MAIN */}
      <div>{children}</div>

      {/* FOOTER */}
      <LandingFooter />
    </div>
  )
}
