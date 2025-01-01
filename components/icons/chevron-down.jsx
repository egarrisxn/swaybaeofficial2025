const ChevronDown = ({className = '', width = '24', height = '24'}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 24 24'
      className={className}
    >
      <path fill='currentColor' d='M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z'></path>
    </svg>
  )
}

export {ChevronDown}
