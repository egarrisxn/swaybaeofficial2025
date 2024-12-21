'use client'
import React, {useCallback, useEffect, useState} from 'react'
import {motion} from 'motion/react'
import {cn} from '@/lib/utils'

export default function TableOfContents({}) {
  const [headings, setHeadings] = useState([])
  const [activeHeading, setActiveHeading] = useState(null)

  const getHeadings = useCallback(() => {
    return Array.from(document.querySelectorAll('h1[id], h2[id], h3[id]')).map((heading) => ({
      id: heading.id,
      text: (heading.textContent || '').replace(/#$/, ''),
      level: heading.tagName.toLowerCase(),
      top: heading.offsetTop,
    }))
  }, [])

  useEffect(() => {
    const collectedHeadings = getHeadings()
    setHeadings(collectedHeadings)

    const observer = new IntersectionObserver(
      (entries) => {
        let currentActive = null

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            currentActive = entry.target.id
          }
        })

        if (currentActive) {
          setActiveHeading(currentActive)
        }
      },
      {threshold: 0.1},
    )

    collectedHeadings.forEach((heading) => {
      const element = document.getElementById(heading.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [getHeadings])

  const scrollToHeading = (id) => {
    const element = document.getElementById(id)

    if (element) {
      const top = element.offsetTop - 100
      window.scrollTo({
        top,
        behavior: 'smooth',
      })
    }
  }

  return (
    <motion.nav
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 0.25}}
      className='fixed left-[2rem] right-auto top-[10rem] mt-0 hidden h-full w-48 justify-start space-y-4 transition lg:right-[1rem] lg:top-[8rem] xl:left-auto xl:top-[10rem] xl:block 2xl:right-[8rem]'
    >
      <div className='mt-0 flex flex-col gap-0'>
        {headings.map((heading) => (
          <div key={heading.id} className='mt-0'>
            <button
              type='button'
              onClick={() => scrollToHeading(heading.id)}
              className={cn({
                'ml-2 mt-0 border-l border-l-muted py-1 text-left text-muted-foreground opacity-100 transition ease-in-out hover:opacity-50': true,
                'text-bold border-l-primary': activeHeading === heading.id,
                'pl-4': heading.level === 'h1',
                'pl-6': heading.level === 'h2',
                'pl-7': heading.level === 'h3',
              })}
              data-active={activeHeading === heading.id ? 'true' : 'false'}
            >
              {heading.text}
            </button>
          </div>
        ))}
      </div>
    </motion.nav>
  )
}

// ! Old Table Of Content

// 'use client'
// import Link from 'next/link'
// import {useEffect, useState} from 'react'
// import {Tooltip} from '@/components/ui/tooltip'

// const tocStyle = {
//   color: 'white',
// }

// const tocStyleActive = {
//   color: 'black',
// }

// export default function TableOfContent({headings}) {
//   const [activeLink, setActiveLink] = useState(null)

//   useEffect(() => {
//     let activeLink = null
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         const id = entry.target.getAttribute('id')
//         const tocLink = document.querySelector(`a[href='#${id}']`)
//         if (tocLink && entry.intersectionRatio > 0) {
//           if (activeLink) {
//             activeLink.style.color = tocStyle.color
//           }
//           tocLink.style.color = tocStyleActive.color
//           activeLink = tocLink
//           setActiveLink(tocLink)
//         }
//       })
//     })
//     document.querySelectorAll('h1[id], h2[id], h3[id], h4[id], h5[id]').forEach((header) => {
//       observer.observe(header)
//     })
//     return () => observer.disconnect()
//   }, [])

//   return (
//     <section className='z-20 mr-4'>
//       <ol className='table-of-content'>
//         {headings.map((heading, idx) => (
//           <li key={idx} className='my-2.5 flex h-8 w-full items-center justify-center'>
//             <Link
//               href={`#${heading._key}`}
//               style={tocStyle}
//               className={`text-5xl ${activeLink && activeLink.getAttribute('href') === `#${heading._key}` ? 'active' : ''}`}
//             >
//               <Tooltip
//                 direction='right'
//                 text={heading.children.map((child) => child.text).join(' ')}
//               >
//                 <span className='z-20 hover:text-primary'>&bull;</span>
//               </Tooltip>
//             </Link>
//           </li>
//         ))}
//       </ol>
//     </section>
//   )
// }
