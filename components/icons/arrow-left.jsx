const ArrowLeft = ({className = '', width = '24', height = '24', strokeWidth = '2'}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 24 24'
      className={className}
    >
      <path
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={strokeWidth}
        d='M5 12h14M5 12l6 6m-6-6l6-6'
      ></path>
    </svg>
  )
}

export {ArrowLeft}
