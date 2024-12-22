import {ContactForm} from '@/components/contact-form'
import {GradientHeading} from '@/components/ui/gradient-heading'

export default function ContactSection() {
  return (
    <section className='border-4 border-white py-12 dark:border-black'>
      <div className='container mx-auto my-24 max-w-2xl px-4 lg:max-w-4xl xl:px-0'>
        <div className='grid grid-cols-1 place-items-center gap-6 lg:place-items-start lg:gap-8'>
          {/* Text Section */}
          <div className='flex w-full flex-col gap-1 p-2 sm:px-12 lg:gap-3 lg:p-2 xl:pb-0'>
            <h6 className='pb-2 text-lg font-semibold uppercase tracking-wide text-gray-700 lg:text-xl 2xl:text-2xl dark:text-neutral-100'>
              Questions?
            </h6>
            <h2 className='bg-gradient-to-t from-neutral-600 via-neutral-700 to-neutral-800 bg-clip-text pb-3 font-serif text-4xl font-bold text-transparent drop-shadow-[0_0.5px_0.5px_rgba(0,0,0,0.8)] lg:text-6xl dark:from-stone-200 dark:to-neutral-200'>
              Go ahead and reach out!
            </h2>
            <p className='max-w-3xl text-pretty font-light leading-relaxed text-gray-700 md:text-lg lg:text-xl dark:text-gray-300'>
              If you would prefer to direct email me, go right ahead. My email is
              sway.bae9000@gmail.com. I will get back with you in as soon as possible.
            </p>
          </div>

          {/* Contact Section */}
          <div className='flex w-full p-2 sm:px-10 xl:px-2 xl:pt-0'>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
