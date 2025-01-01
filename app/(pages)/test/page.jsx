import {NewNav} from '@/components/unused/new-nav'
// import {SpotifyTrackList} from '@/components/unused/spotify-tracklist'
import {AnimatedGradients} from '@/components/unused/animated-gradients'
import {AnimatedModal} from '@/components/unused/animated-modal'
import {LogoCarousel} from '@/components/unused/logo-carousel'
import {AnimatedMenu} from '@/components/unused/animated-menu'
import {FadedImage} from '@/components/unused/faded-image'
import {TimeOfDay} from '@/components/unused/time-of-day'
import {ParticlesButton} from '@/components/unused/particles-button'
import {HoverButton} from '@/components/unused/hover-button'
import {HamburgerButton} from '@/components/unused/hamburger-button'
import {FlowerNav} from '@/components/unused/flower-nav'
import {SpotlightCardGroup} from '@/components/unused/spotlight-card-group'
import {SpinwheelCarousel} from '@/components/unused/spinwheel-carousel'
import {ColoredSocialIcons} from '@/components/unused/colored-social-icons'
import {SpinningIcons} from '@/components/unused/spinning-icons'
import {NeonText} from '@/components/unused/neon-text'
import {FluidText} from '@/components/unused/fluid-text'
import {Dock} from '@/components/unused/dock'
import {NavigationPopover} from '@/components/unused/navigation-popover'
import {ShiftTabs} from '@/components/unused/shift-tabs'

export default function TestPage() {
  return (
    <div className='w-full py-12'>
      <NewNav />
      <div className='container mx-auto my-24 max-w-2xl border px-4 lg:max-w-7xl xl:px-0'>
        {/* <section className='mx-auto grid min-h-screen px-2 w-full grid-cols-1 place-items-center border'>
          <SpotifyTrackList />
        </section> */}
        <section className='mx-auto grid min-h-screen w-full grid-cols-1 place-items-center border px-2'>
          <AnimatedGradients />
        </section>
        <section className='mx-auto grid min-h-screen w-full grid-cols-1 place-items-center border px-2'>
          <AnimatedModal />
        </section>
        <section className='mx-auto grid min-h-screen w-full grid-cols-1 place-items-center border px-2'>
          <LogoCarousel columnCount={3} />
        </section>
        <section className='mx-auto grid min-h-screen w-full grid-cols-1 place-items-center border px-2'>
          <AnimatedMenu
            menuItems={['Home', 'Features', 'Company', 'FAQs', 'Terms of Use', 'Get In Touch']}
          />
        </section>
        <section className='mx-auto grid min-h-screen w-full grid-cols-1 place-items-center border px-2'>
          <FadedImage />
        </section>
        <section className='mx-auto grid min-h-screen w-full grid-cols-1 place-items-center border px-2'>
          <TimeOfDay />
        </section>
        <section className='mx-auto grid min-h-screen w-full grid-cols-1 place-items-center border px-2'>
          <ParticlesButton />
        </section>
        <section className='mx-auto grid min-h-screen w-full grid-cols-1 place-items-center border px-2'>
          <HoverButton text={'Click Me!'} />
        </section>
        <section className='mx-auto grid min-h-screen w-full grid-cols-1 place-items-center border px-2'>
          <HamburgerButton />
        </section>
        <section className='mx-auto grid min-h-screen w-full grid-cols-1 place-items-center border px-2'>
          <FlowerNav />
        </section>
        <section className='mx-auto grid min-h-screen w-full grid-cols-1 place-items-center border px-2'>
          <SpotlightCardGroup />
        </section>
        <section className='mx-auto grid min-h-screen w-full grid-cols-1 place-items-center border px-2'>
          <SpinwheelCarousel />
        </section>
        <section className='mx-auto grid min-h-screen w-full grid-cols-1 place-items-center border px-2'>
          <ColoredSocialIcons />
        </section>
        <section className='mx-auto grid min-h-screen w-full grid-cols-1 place-items-center border px-2'>
          <SpinningIcons />
        </section>
        <section className='mx-auto grid min-h-screen w-full grid-cols-1 place-items-center border px-2'>
          <NeonText />
        </section>
        <section className='mx-auto grid min-h-screen w-full grid-cols-1 place-items-center border px-2'>
          <FluidText />
        </section>
        <section className='mx-auto grid min-h-screen w-full grid-cols-1 place-items-center border px-2'>
          <Dock />
        </section>
        <section className='mx-auto grid min-h-screen w-full grid-cols-1 place-items-center border px-2'>
          <NavigationPopover />
        </section>
        <section className='mx-auto grid min-h-screen w-full grid-cols-1 place-items-center border px-2'>
          <ShiftTabs
            items={[
              'About',
              'Calendar',
              'Community',
              'Blog',
              'Contact',
              'Social',
              'Media Kit',
              'FAQ',
              'Store',
            ]}
          />
        </section>
      </div>
    </div>
  )
}
