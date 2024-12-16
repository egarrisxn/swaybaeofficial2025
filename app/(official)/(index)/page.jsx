import HeroSection from '@/components/(sections)/hero-section'
import AboutSection from '@/components/(sections)/about-section'
import YouTubeSection from '@/components/(sections)/youtube-section'
import TwitterSection from '@/components/(sections)/twitter-section'
import SocialSection from '@/components/(sections)/social-section'
import CalendarSection from '@/components/(sections)/calendar-section'
import MerchSection from '@/components/(sections)/merch-section'
import BlogSection from '@/components/(sections)/blog-section'
import BrandsSection from '@/components/(sections)/brand-section'
import ContactSection from '@/components/(sections)/contact-section'
import PhotosSection from '@/components/(sections)/photo-section'
import TextSection from '@/components/(sections)/text-section'

export const metadata = {
  title: 'Home',
}

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <YouTubeSection />
      <TwitterSection />
      <SocialSection />
      <CalendarSection />
      <MerchSection />
      <BlogSection />
      <BrandsSection />
      <ContactSection />
      <PhotosSection />
      <TextSection />
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
