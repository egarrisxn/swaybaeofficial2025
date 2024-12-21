import {ContactForm} from '@/components/contact-form'
import {GradientHeading} from '@/components/ui/gradient-heading'

export default function ContactSection() {
  return (
    <section className='border-4 border-white py-12 dark:border-black'>
      <div className='container mx-auto my-24 max-w-2xl px-4 lg:max-w-4xl xl:px-0'>
        <div className='grid grid-cols-1 place-items-center gap-6 lg:place-items-start'>
          {/* Text Section */}
          <div className='flex w-full flex-col gap-1 p-2 sm:px-12 lg:gap-3 lg:p-2 xl:pb-0'>
            <h6 className='text-lg font-semibold uppercase tracking-wide text-gray-700 lg:text-xl dark:text-neutral-100'>
              Questions?
            </h6>
            <h2 className='bg-gradient-to-t from-neutral-700 to-neutral-800 bg-clip-text pb-3 text-4xl font-semibold text-transparent md:text-5xl lg:text-6xl xl:mt-2 dark:from-stone-200 dark:to-neutral-200'>
              Go ahead and reach out!
            </h2>
            <p className='max-w-xl pb-3 font-light leading-relaxed text-gray-600 md:text-lg lg:max-w-3xl lg:text-xl xl:pb-0'>
              If you would prefer to direct email me, go right ahead. My email is sway.bae9000 @
              gmail.com. I will get back with you in as soon as possible.
            </p>
          </div>

          {/* Contact Section */}
          <div className='flex w-full flex-col gap-1 p-2 sm:px-10 xl:px-2 xl:pt-0'>
            <ContactForm />
            <p className='mt-6 text-center text-sm'>
              You may also reach out to me on
              <br />
              any of my social platforms.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
