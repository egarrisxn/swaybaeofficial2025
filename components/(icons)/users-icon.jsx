const UsersIcon = ({className = '', width = '24', height = '24', strokeWidth = '2'}) => {
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
        <path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2'></path>
        <circle cx={9} cy={7} r={4}></circle>
        <path d='M22 21v-2a4 4 0 0 0-3-3.87m-3-12a4 4 0 0 1 0 7.75'></path>
      </g>
    </svg>
  )
}

export {UsersIcon}
