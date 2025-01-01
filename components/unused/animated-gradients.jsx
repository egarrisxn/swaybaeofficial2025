export function AnimatedGradients() {
  return (
    <>
      <h1 className='animate-gradientXY border bg-gradient-to-tr from-primary via-accent to-secondary bg-clip-text text-6xl font-extrabold text-transparent md:text-8xl'>
        This animation is on the vertical & horizontal axis
      </h1>
      <h3 className='animate-gradientY border bg-gradient-to-br from-primary via-accent to-secondary bg-clip-text text-3xl font-extrabold text-transparent md:text-5xl'>
        This animation is on just the vertical axis
      </h3>
      <p className='animate-gradientX border bg-gradient-to-tl from-primary via-accent to-secondary bg-clip-text text-lg font-extrabold text-transparent md:text-2xl'>
        This animation is on just the horizontal axis
      </p>
    </>
  )
}
