import {PagesHeader} from '../_components/header'
import {PagesFooter} from '../_components/footer'

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
