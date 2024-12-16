import {ContactForm} from '@/components/contact-form'

export default function ContactSection() {
  return (
    <section className='border-4'>
      <div className='container mx-auto my-24 grid max-w-2xl grid-cols-1 place-items-center gap-8 p-4 lg:max-w-4xl'>
        <div className='flex w-full flex-col px-4 lg:px-8 xl:px-4'>
          <span className='uppercase leading-loose tracking-wider xl:text-lg'>Questions?</span>
          <h2 className='mt-1 text-3xl italic lg:mt-2 lg:text-5xl xl:text-6xl'>
            Go ahead and reach out!
          </h2>
          <p className='my-4 max-w-xl font-light leading-loose tracking-wider md:text-lg xl:text-xl'>
            If you would prefer to direct email me, go right ahead. My email is sway.bae9000 @
            gmail.com. I will get back with you in as soon as possible.
          </p>
        </div>
        <div className='flex flex-col px-4 lg:w-full lg:px-8 xl:px-4'>
          <ContactForm />
          <p className='mt-8 text-center text-sm'>
            You may also reach out to me on
            <br />
            any of my social platforms.
          </p>
        </div>
      </div>
    </section>
  )
}
