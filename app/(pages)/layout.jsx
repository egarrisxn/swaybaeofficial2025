import {Header} from '@/components/header'
import {Footer} from '@/components/footer'

export default function PagesLayout({children}) {
  return (
    <div className='relative grid min-h-[100dvh] w-full grid-rows-[auto_1fr_auto] overscroll-contain'>
      {/* HEADER */}
      <Header isSticky={false} />

      {/* MAIN */}
      <main>{children}</main>

      {/* FOOTER */}
      <Footer hasScroll={false} />
    </div>
  )
}
