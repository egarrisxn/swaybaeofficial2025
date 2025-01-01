const SearchIcon = ({className = '', width = '24', height = '24', strokeWidth = '2'}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 24 24'
      className={className}
    >
      <g
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={strokeWidth}
      >
        <circle cx={11} cy={11} r={8}></circle>
        <path d='m21 21l-4.3-4.3'></path>
      </g>
    </svg>
  )
}

export {SearchIcon}
