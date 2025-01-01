import {ContactForm} from '@/components/contact-form'

export const metadata = {
  title: 'Contact Page',
}

export default function ContactPage() {
  return (
    <section className='min-h-screen w-full py-12'>
      <div className='container mx-auto my-24 max-w-2xl px-4 lg:max-w-7xl xl:px-0'>
        <div className='mx-auto grid max-w-[65ch] grid-cols-1 items-center leading-relaxed xl:max-w-[80ch]'>
          <h2 className='mb-4 font-serif text-[1.5rem] font-bold leading-snug text-[#111827] xl:text-[2.0rem] xl:leading-none dark:text-white'>
            Contact
          </h2>
          <h5>Official Bio</h5>
          <p className='my-5 max-w-5xl leading-relaxed text-[#374151] xl:text-[1.25rem] dark:text-[#d1d5db]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <div className='flex w-full rounded-lg border border-foreground px-8 pb-12 pt-10 shadow-lg'>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
