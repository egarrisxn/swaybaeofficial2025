import {Header} from '../_components/header'
import {Footer} from '../_components/footer'

export default function PagesLayout({children}) {
  return (
    <div className='relative grid min-h-[100dvh] w-full grid-rows-[auto_1fr_auto] overscroll-contain'>
      {/* HEADER */}
      <Header isSticky={false} />

      {/* MAIN */}
      <div>{children}</div>

      {/* FOOTER */}
      <Footer hasScroll={false} />
    </div>
  )
}
