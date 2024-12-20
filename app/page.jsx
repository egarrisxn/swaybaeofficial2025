import HeroSection from '@/components/(landing)/hero-section'
import AboutSection from '@/components/(landing)/about-section'
import SocialSection from '@/components/(landing)/social-section'
import YouTubeSection from '@/components/(landing)/youtube-section'
import TwitterSection from '@/components/(landing)/twitter-section'
import CalendarSection from '@/components/(landing)/calendar-section'
import MerchSection from '@/components/(landing)/merch-section'
import BlogSection from '@/components/(landing)/blog-section'
import BrandsSection from '@/components/(landing)/brand-section'
import ContactSection from '@/components/(landing)/contact-section'
import PhotosSection from '@/components/(landing)/photo-section'
import TextSection from '@/components/(landing)/text-section'

import {LandingHeader} from './_components/header'
import {LandingFooter} from './_components/footer'

export const metadata = {
  title: 'Landing',
}

export default function LandingPage() {
  return (
    <div className='relative grid min-h-[100dvh] w-full grid-rows-[auto_1fr_auto] overscroll-contain'>
      <LandingHeader />
      <div>
        <HeroSection />
        <AboutSection />
        <SocialSection />
        <YouTubeSection />
        <TwitterSection />
        <CalendarSection />
        <MerchSection />
        <BlogSection />
        <BrandsSection />
        <ContactSection />
        <PhotosSection />
        <TextSection />
      </div>
      <LandingFooter />
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
