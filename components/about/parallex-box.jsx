export default function ParallexBox() {
  return (
    <section className='w-full'>
      <div className="relative flex min-h-[95vh] items-center justify-center bg-[url('/hero/desktop.png')] bg-cover bg-fixed bg-center bg-no-repeat p-0">
        <div className='absolute inset-[auto,auto,auto,3%] h-fit max-w-[28rem] space-y-8 bg-white p-3 text-start transition-all duration-300 hover:bg-gray-100 sm:left-auto sm:right-[2.5%] sm:mr-0 sm:rounded-sm sm:shadow-xl lg:right-[8%] lg:max-w-[36rem] lg:px-16 lg:py-12'>
          <p className='text-[#111827] lg:text-lg lg:leading-relaxed lg:tracking-wider'>
            Fusce eget turpis commodo, sodales orci quis, commodo neque. Morbi ac mauris pretium,
            egestas libero nec, congue leo. Cras id ex viverra ex aliquam dapibus ut eu metus.
            Aliquam mollis gravida orci vel malesuada. Vivamus augue lorem, volutpat vel aliquam ut,
            gravida quis justo. Mauris vitae ultricies nisi. Nulla facilisi because....
          </p>
          <p className='font-serif text-2xl font-semibold italic leading-snug text-[#111827] lg:text-4xl lg:leading-relaxed'>
            Lorem Ipsum wes true dante everlast fu!
          </p>
        </div>
      </div>
    </section>
  )
}
