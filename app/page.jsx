import HeroSection from '@/components/landing/hero-section'
import AboutSection from '@/components/landing/about-section'
import SocialRow from '@/components/landing/social-row'
import YouTubeSection from '@/components/landing/youtube-section'
import TwitterSection from '@/components/landing/twitter-section'
import CalendarSection from '@/components/landing/calendar-section'
import MerchSection from '@/components/landing/merch-section'
import BlogSection from '@/components/landing/blog-section'
import BrandRow from '@/components/landing/brand-row'
import ContactSection from '@/components/landing/contact-section'
import PhotosSection from '@/components/landing/photo-section'
import CreatorOfChaosScrollText from '@/components/landing/creatorofchaos-scroll-text'

import {Header} from '@/components/header'
import {Footer} from '@/components/footer'

export const metadata = {
  title: 'Landing',
}

export default function LandingPage() {
  return (
    <div className='relative grid min-h-[100dvh] w-full grid-rows-[auto_1fr_auto] overscroll-contain'>
      <Header isSticky={true} />
      <main>
        <HeroSection />
        <hr />
        <AboutSection />
        <hr />
        <SocialRow />
        <hr />
        <YouTubeSection />
        <hr />
        <TwitterSection />
        <hr />
        <CalendarSection />
        <hr />
        <MerchSection />
        <hr />
        <BlogSection />
        <hr />
        <BrandRow />
        <hr />
        <div id='contact'>
          <ContactSection />
        </div>
        <hr />
        <PhotosSection />
        <hr />
        <CreatorOfChaosScrollText />
      </main>
      <Footer hasScroll={true} />
    </div>
  )
}

// ! Test Loader
// function loadingPage() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Loading...");
//     }, 3000);
//   });
// }
// export default async function Home() {
//   const load = await loadingPage();
//   console.log({ load });
//   return <h2>Home Page</h2>;
// }
