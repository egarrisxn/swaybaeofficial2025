export const metadata = {
  title: 'Subathon Page',
}

export default function SubathonPage() {
  return (
    <div className='mx-auto flex min-h-screen flex-col items-center py-12'>
      <div className='prose my-12'>
        <h1>Subathon</h1>
        <h5>End-Of-Year Stream Party</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim ,{' '}
          <a href='#' target='_blank' rel='noopener noreferrer' className='text-blue-500 underline'>
            <em>Random Link Example</em>
          </a>{' '}
          id est laborum.
        </p>
      </div>
    </div>
  )
}
