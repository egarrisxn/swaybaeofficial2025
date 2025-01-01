import Image from 'next/image'
import {LogoCarousel} from '@/components/unused/logo-carousel'

export const metadata = {
  title: 'About Page',
}

export default function AboutPage() {
  return (
    <div className='-green-500 w-full py-12'>
      {/* SO WHO AM I? */}
      <div className='grid min-h-screen w-full place-items-center'>
        <section className='container mx-auto my-24 max-w-4xl px-4 md:px-8 lg:px-0 xl:max-w-5xl 2xl:max-w-7xl'>
          <div className='grid grid-cols-1 items-center gap-4 p-1 md:grid-cols-2 md:gap-5 lg:gap-6 xl:gap-7 2xl:gap-8'>
            <article className='md:mb-16'>
              <h2 className='mb-4 font-serif text-2xl leading-snug tracking-tight text-[#111827] md:mb-3 md:text-3xl lg:mb-6 lg:text-4xl xl:text-5xl 2xl:text-6xl dark:text-white'>
                So, Who Am I?
              </h2>
              <h3 className='font-medium leading-snug tracking-tight text-black lg:text-lg xl:text-xl 3xl:text-2xl dark:text-white'>
                Praesent euismod sed magna auctor feugiat.
              </h3>
              <p className='my-5 leading-relaxed text-[#374151] md:max-w-sm md:pr-8 lg:pr-0 lg:text-lg lg:tracking-wide xl:max-w-md xl:text-xl 2xl:max-w-lg 3xl:max-w-[34rem] 3xl:text-2xl dark:text-[#d1d5db]'>
                Nullam tristique odio eget vestibulum vulputate. Vivamus condimentum lorem et nunc
                volutpat, non tincidunt lacus egestas. Curabitur aliquam tincidunt dui vel
                condimentum
              </p>
            </article>
            <aside className=' '>
              <Image
                src='/grid/1.jpg'
                alt='A cutout photo of Sway'
                width={750}
                height={1000}
                className=''
              />
            </aside>
          </div>
        </section>
      </div>

      {/* WHAT IT IS YOU DO! */}
      <div className='grid min-h-screen w-full place-items-center'>
        <section className='container mx-auto my-24 max-w-4xl px-4 md:px-8 lg:px-0 xl:max-w-5xl 2xl:max-w-7xl'>
          <div className='p-1'>
            <div className='mt-4 font-semibold sm:text-lg md:text-2xl lg:text-lg xl:text-3xl'>
              <h2 className='mb-4 font-serif text-[1.5rem] font-bold leading-snug text-[#111827] xl:text-[1.9rem] xl:leading-none dark:text-white'>
                What is it that I actually do?
              </h2>
            </div>
            <section className=''>
              <p className='my-5 max-w-5xl leading-relaxed text-[#374151] xl:text-[1.25rem] dark:text-[#d1d5db]'>
                Maecenas ex augue, consequat eget tortor sagittis, laoreet tristique nulla. Cras
                accumsan venenatis dui, pharetra vulputate orci cursus quis. Ut quis magna eget nisl
                malesuada finibus.
              </p>
              <p className='my-5 max-w-5xl leading-relaxed text-[#374151] xl:text-[1.25rem] dark:text-[#d1d5db]'>
                Proin venenatis rutrum lorem, id aliquam justo vestibulum ac. Vivamus ac purus
                vehicula, pulvinar urna ac, tristique elit. Vestibulum ante ipsum primis in faucibus
                orci luctus et ultrices posuere cubilia curae; Quisque ex erat, scelerisque vitae
                elementum in, dignissim quis ex. Curabitur gravida efficitur luctus. Duis eleifend
                enim vel orci molestie placerat.
              </p>
              <p className='my-5 max-w-5xl leading-relaxed text-[#374151] xl:text-[1.25rem] dark:text-[#d1d5db]'>
                Mauris efficitur quam eu lacus molestie, dignissim cursus augue scelerisque. Cras
                eget magna at mi facilisis ullamcorper. Fusce eget turpis commodo, sodales orci
                quis, commodo neque. Morbi ac mauris pretium, egestas libero nec, congue leo. Cras
                id ex viverra ex aliquam dapibus ut eu metus. Aliquam mollis gravida orci vel
                malesuada. Vivamus augue lorem, volutpat vel aliquam ut, gravida quis justo. Mauris
                vitae ultricies nisi. Nulla facilisi.
              </p>
              <p className='my-5 max-w-5xl leading-relaxed text-[#374151] xl:text-[1.25rem] dark:text-[#d1d5db]'>
                Donec rhoncus risus semper placerat viverra. Quisque feugiat pretium tellus in
                porta. Morbi libero nibh, ultricies sed facilisis in, auctor at lectus. Quisque
                elementum nisl vel ante commodo, sed bibendum tellus aliquam.
              </p>
              <p className='my-5 max-w-5xl leading-relaxed text-[#374151] xl:text-[1.25rem] dark:text-[#d1d5db]'>
                Ut ornare, leo vel blandit pellentesque, ipsum nisl commodo quam, laoreet elementum
                orci odio iaculis arcu. Maecenas vitae porttitor dolor, ac rutrum justo. Cras sit
                amet maximus quam.
              </p>
              <p className='my-5 max-w-5xl leading-relaxed text-[#374151] xl:text-[1.25rem] dark:text-[#d1d5db]'>
                Mauris efficitur quam eu lacus molestie, dignissim cursus augue scelerisque. Cras
                eget magna at mi facilisis ullamcorper. Fusce eget turpis commodo, sodales orci
                quis, commodo neque. Morbi ac mauris pretium, egestas libero nec, congue leo. Cras
                id ex viverra ex aliquam dapibus ut eu metus. Aliquam mollis gravida orci vel
                malesuada. Vivamus augue lorem, volutpat vel aliquam ut, gravida quis justo. Mauris
                vitae ultricies nisi. Nulla facilisi.
              </p>
              <p className='my-5 max-w-5xl leading-relaxed text-[#374151] xl:text-[1.25rem] dark:text-[#d1d5db]'>
                Nam non feugiat mauris, vel iaculis felis.
              </p>
            </section>
          </div>
        </section>
      </div>

      {/* WHY YOU DO THIS & FOR WHOM? */}
      <div className='grid min-h-screen w-full place-items-center'>
        <section className='container mx-auto my-24'>
          <div className='p-1'>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-3 md:p-4'>
              <div className='mx-auto flex flex-col items-center justify-start gap-4 p-8 text-center leading-relaxed text-[#374151] xl:text-[1.25rem] dark:text-[#d1d5db]'>
                <h3 className='mb-4 font-serif text-2xl font-semibold italic leading-snug text-[#111827] md:mb-3 dark:text-white'>
                  Why I do this?
                </h3>
                <p>
                  Vivamus id velit fringilla enim egestas congue efficitur eget augue. Nullam vitae
                  interdum massa.
                </p>
              </div>
              <div className='mx-auto flex flex-col items-center justify-start gap-4 p-8 text-center leading-relaxed text-[#374151] xl:text-[1.25rem] dark:text-[#d1d5db]'>
                <h3 className='mb-4 font-serif text-2xl font-semibold italic leading-snug text-[#111827] md:mb-3 dark:text-white'>
                  Who I do this for?
                </h3>
                <p>
                  Vivamus id velit fringilla enim egestas congue efficitur eget augue. Nullam vitae
                  interdum massa.
                </p>
              </div>
              <div className='mx-auto flex flex-col items-center justify-start gap-4 p-8 text-center leading-relaxed text-[#374151] xl:text-[1.25rem] dark:text-[#d1d5db]'>
                <h3 className='mb-4 font-serif text-2xl font-semibold italic leading-snug text-[#111827] md:mb-3 dark:text-white'>
                  What can I do for you?
                </h3>
                <p>
                  Vivamus id velit fringilla enim egestas congue efficitur eget augue. Nullam vitae
                  interdum massa.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* WHAT YOU HAVE ACCOMPLISHED */}
      <div className='grid min-h-screen w-full place-items-center'>
        <section className='container mx-auto my-24 max-w-4xl px-4 md:px-8 lg:px-0 xl:max-w-5xl 2xl:max-w-7xl'>
          <div className='p-1'>
            <div className='mt-4 font-semibold sm:text-lg md:text-2xl lg:text-lg xl:text-3xl'>
              <h2 className='mb-4 font-serif text-[1.5rem] font-bold leading-snug text-[#111827] xl:text-[1.9rem] xl:leading-none dark:text-white'>
                Some accomplishments along the way!
              </h2>
            </div>
            <div className='gorder mt-4 grid grid-cols-1 gap-8 p-1 md:grid-cols-2 lg:mt-8 xl:mt-6 xl:grid-cols-3'>
              <p className='leading-6 transition-all md:leading-7 lg:rounded-lg lg:p-3 lg:leading-6 lg:shadow xl:p-5 xl:leading-7'>
                <span className='text-slate-500'>&#9864; </span> Nullam dui nisl, ultricies ac
                suscipit nec, aliquet ut tortor. In sapien leo, blandit at est iaculis, tempor
                imperdiet tellus. Consectetur adipiscing elit.
              </p>
              <p className='leading-6 transition-all md:leading-7 lg:rounded-lg lg:p-3 lg:leading-6 lg:shadow xl:p-5 xl:leading-7'>
                <span className='text-slate-500'>&#9864; </span> Morbi convallis elit ut risus
                rhoncus, quis ullamcorper massa accumsan. Consectetur adipiscing elit. Consectetur
                adipiscing elit.
              </p>
              <p className='leading-6 transition-all md:leading-7 lg:rounded-lg lg:p-3 lg:leading-6 lg:shadow xl:p-5 xl:leading-7'>
                <span className='text-slate-500'>&#9864; </span> Nulla vulputate, nibh non aliquam
                egestas, lacus nulla bibendum nunc, in interdum turpis diam et nisi. Consectetur
                adipiscing elit. Lorem ipsum.
              </p>
              <p className='leading-6 transition-all md:leading-7 lg:rounded-lg lg:p-3 lg:leading-6 lg:shadow xl:p-5 xl:leading-7'>
                <span className='text-slate-500'>&#9864; </span> Phasellus vestibulum, urna a
                vestibulum sollicitudin, sapien turpis pulvinar eros, at posuere lacus sapien sed
                erat. Consectetur adipiscing elit.
              </p>
              <p className='leading-6 transition-all md:leading-7 lg:rounded-lg lg:p-3 lg:leading-6 lg:shadow xl:p-5 xl:leading-7'>
                <span className='text-slate-500'>&#9864; </span> Quisque egestas sagittis lectus,
                sit amet rutrum orci interdum vitae. Lorem ipsum dolor sit amet. Consectetur
                adipiscing elit. Consectetur adipiscing elit.
              </p>
              <p className='leading-6 transition-all md:leading-7 lg:rounded-lg lg:p-3 lg:leading-6 lg:shadow xl:p-5 xl:leading-7'>
                <span className='text-slate-500'>&#9864; </span> Morbi maximus egestas erat, eget
                auctor turpis dignissim at. Lorem ipsum dolor sit amet. Consectetur adipiscing elit.
                Consectetur adipiscing elit.
              </p>
              <p className='leading-6 transition-all md:leading-7 lg:rounded-lg lg:p-3 lg:leading-6 lg:shadow xl:p-5 xl:leading-7'>
                <span className='text-slate-500'>&#9864; </span> Cras porttitor mattis laoreet. Sed
                congue, sem a ullamcorper sodales. Cras porttitor mattis laoreet. Sed congue, sem a
                ullamcorper sodales.
              </p>
              <p className='leading-6 transition-all md:leading-7 lg:rounded-lg lg:p-3 lg:leading-6 lg:shadow xl:p-5 xl:leading-7'>
                <span className='text-slate-500'>&#9864; </span> Vivamus vulputate commodo quam in
                pulvinar. Cras porttitor mattis laoreet. Sed congue, sem a ullamcorper sodales. Sed
                congue, sem a ullamcorper sodales.
              </p>
              <p className='leading-6 transition-all md:leading-7 lg:rounded-lg lg:p-3 lg:leading-6 lg:shadow xl:p-5 xl:leading-7'>
                <span className='text-slate-500'>&#9864; </span> Nam rhoncus euismod turpis a
                iaculis. Pellentesque nulla lorem, faucibus a luctus eget, sollicitudin sit amet
                massa, faucibus a luctus eget, sollicitudin sit amet massa.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* WHO YOU HAVE WORKED WITH */}
      <div className='grid min-h-96 w-full place-items-center'>
        <section className='container mx-auto my-24'>
          <div className='p-1'>
            <div className='mt-4 font-semibold sm:text-lg md:text-2xl lg:text-lg xl:text-3xl'>
              <h2 className='mb-4 font-serif text-[1.5rem] font-bold leading-snug text-[#111827] xl:text-[1.9rem] xl:leading-none dark:text-white'>
                It&apos;s been my pleasure to work with brands like:
              </h2>
              <LogoCarousel columnCount={3} />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
