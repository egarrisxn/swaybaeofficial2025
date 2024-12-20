import PagesHeader from '@/components/(pages)/pages-header'
import PagesFooter from '@/components/(pages)/pages-footer'

export default function PagesLayout({children}) {
  return (
    <div className='relative grid min-h-[100dvh] w-full grid-rows-[auto_1fr_auto] overscroll-contain'>
      {/* HEADER */}
      <PagesHeader />

      {/* MAIN */}
      <div>{children}</div>

      {/* FOOTER */}
      <PagesFooter />
    </div>
  )
}
