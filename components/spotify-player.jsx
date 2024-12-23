'use client'
import Image from 'next/image'
import {useEffect, useState} from 'react'
import {getNowPlayingItem} from '@/lib/spotify/dataHandler'

export function SpotifyPlayer() {
  const [loading, setLoading] = useState(true)
  const [result, setResult] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const nowPlayingItem = await getNowPlayingItem()
        setResult(nowPlayingItem)
      } catch (error) {
        console.error('Error fetching now playing item:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      {loading ? (
        <h3 className='tracking-tightest flex-grow font-medium'>Loading..</h3>
      ) : (
        <section className='flex max-w-[21rem] items-center gap-0.5 sm:max-w-[30rem]'>
          <div className='flex flex-row items-center gap-0.5'>
            <svg
              width='1em'
              height='1em'
              viewBox='0 0 20 20'
              className='size-[0.8em] pb-[1px] lg:size-[0.9em]'
            >
              <path
                fill='#1ED760'
                d='M10,0C4.5,0,0,4.5,0,10c0,5.5,4.5,10,10,10c5.5,0,10-4.5,10-10C20,4.5,15.5,0,10,0z M14.6,14.4 c-0.2,0.3-0.6,0.4-0.9,0.2c-2.3-1.4-5.3-1.8-8.8-1c-0.3,0.1-0.7-0.1-0.7-0.5c-0.1-0.3,0.1-0.7,0.5-0.7c3.8-0.9,7.1-0.5,9.7,1.1 C14.7,13.7,14.8,14.1,14.6,14.4z M15.8,11.7c-0.2,0.4-0.7,0.5-1.1,0.3C12,10.3,8,9.8,4.8,10.8c-0.4,0.1-0.8-0.1-1-0.5 c-0.1-0.4,0.1-0.8,0.5-1c3.6-1.1,8.1-0.6,11.2,1.3C15.9,10.9,16,11.3,15.8,11.7z M15.9,8.9C12.7,7,7.4,6.8,4.3,7.7 c-0.5,0.1-1-0.1-1.2-0.6C3,6.6,3.3,6.1,3.8,5.9c3.5-1.1,9.4-0.9,13.1,1.3c0.4,0.3,0.6,0.8,0.3,1.3C16.9,9,16.4,9.1,15.9,8.9z'
              />
            </svg>
            <h3 className='tracking-tightest font-medium'>
              {result.isPlaying ? '' : 'Currently offline'}
            </h3>
          </div>
          {result.isPlaying && (
            <a href={result.songUrl} target='_blank' rel='noopener noreferrer'>
              <div className='flex items-center'>
                <p className='tracking-tightest max-w-24 truncate sm:max-w-36'>{result.artist}</p>
                <span className='pl-0.5 pr-1.5'>:</span>
                <p className='tracking-tightest max-w-48 truncate sm:max-w-52'>{result.title}</p>
              </div>
            </a>
          )}
        </section>
      )}
    </>
  )
}

// 'use client'
// import Image from 'next/image'
// import {useEffect, useState} from 'react'
// import {getNowPlayingItem} from '@/lib/spotify/dataHandler'

// export function SpotifyPlayer() {
//   const [loading, setLoading] = useState(true)
//   const [result, setResult] = useState({})

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const nowPlayingItem = await getNowPlayingItem()
//         setResult(nowPlayingItem)
//       } catch (error) {
//         console.error('Error fetching now playing item:', error)
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchData()
//   }, [])

//   return (
//     <>
//       {loading ? (
//         <h3 className='flex-grow font-semibold tracking-tighter lg:text-base xl:text-lg 2xl:text-2xl'>
//           Loading..
//         </h3>
//       ) : (
//         <section className='flex max-w-72 items-center gap-1 sm:max-w-96 lg:flex-col lg:gap-0.5'>
//           <div className='flex flex-row items-center gap-0.5'>
//             <svg
//               width='1em'
//               height='1em'
//               viewBox='0 0 20 20'
//               className='size-[0.8em] pb-[1px] lg:size-[1em] lg:pb-0'
//             >
//               <path
//                 fill='#1ED760'
//                 d='M10,0C4.5,0,0,4.5,0,10c0,5.5,4.5,10,10,10c5.5,0,10-4.5,10-10C20,4.5,15.5,0,10,0z M14.6,14.4 c-0.2,0.3-0.6,0.4-0.9,0.2c-2.3-1.4-5.3-1.8-8.8-1c-0.3,0.1-0.7-0.1-0.7-0.5c-0.1-0.3,0.1-0.7,0.5-0.7c3.8-0.9,7.1-0.5,9.7,1.1 C14.7,13.7,14.8,14.1,14.6,14.4z M15.8,11.7c-0.2,0.4-0.7,0.5-1.1,0.3C12,10.3,8,9.8,4.8,10.8c-0.4,0.1-0.8-0.1-1-0.5 c-0.1-0.4,0.1-0.8,0.5-1c3.6-1.1,8.1-0.6,11.2,1.3C15.9,10.9,16,11.3,15.8,11.7z M15.9,8.9C12.7,7,7.4,6.8,4.3,7.7 c-0.5,0.1-1-0.1-1.2-0.6C3,6.6,3.3,6.1,3.8,5.9c3.5-1.1,9.4-0.9,13.1,1.3c0.4,0.3,0.6,0.8,0.3,1.3C16.9,9,16.4,9.1,15.9,8.9z'
//               />
//             </svg>
//             <h3 className='font-semibold tracking-tighter lg:text-base xl:text-lg 2xl:text-2xl'>
//               {result.isPlaying ? 'Now playing:' : 'Currently offline'}
//             </h3>
//           </div>
//           {result.isPlaying && (
//             <a href={result.songUrl} target='_blank' rel='noopener noreferrer'>
//               <div className='group flex items-center gap-1 lg:flex-col lg:gap-0'>
//                 <Image
//                   alt={`{result.title}$ album art`}
//                   src={result.albumImageUrl}
//                   className='flex size-4 rounded-sm group-hover:ring-1 group-hover:ring-green-400 lg:size-28 lg:border-2 lg:border-foreground lg:shadow-[-2px_4px_6px_0px_#01091c] lg:group-hover:ring-4 2xl:size-32'
//                   width={128}
//                   height={128}
//                 />
//                 <p className='max-w-36 truncate tracking-tighter sm:max-w-60 lg:max-w-28 lg:text-base xl:text-lg 2xl:text-2xl'>
//                   {result.artist}
//                 </p>
//               </div>
//             </a>
//           )}
//         </section>
//       )}
//     </>
//   )
// }
