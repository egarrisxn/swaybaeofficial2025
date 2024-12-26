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

export const metadata = {
  title: 'Landing',
}

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SocialSection />
      <YouTubeSection />
      <hr className='h-1 bg-black dark:bg-white' />
      <TwitterSection />
      <hr className='h-1 bg-black dark:bg-white' />
      <CalendarSection />
      <hr className='h-1 bg-black dark:bg-white' />
      <MerchSection />
      <hr className='h-1 bg-black dark:bg-white' />
      <BlogSection />
      <BrandsSection />
      <div id='contact'>
        <ContactSection />
      </div>
      <PhotosSection />
      <TextSection />
    </>
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
