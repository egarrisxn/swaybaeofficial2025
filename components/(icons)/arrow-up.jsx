const ArrowUp = ({className = '', width = '24', height = '24', strokeWidth = '2'}) => {
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
        d='M12 5v14m6-8l-6-6m-6 6l6-6'
      ></path>
    </svg>
  )
}

export {ArrowUp}
