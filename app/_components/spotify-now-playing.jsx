'use client'
import {useEffect, useState} from 'react'
import {getNowPlayingItem} from '@/lib/spotify/dataHandler'
import {SpotifyColored} from '@/components/(icons)/spotify-colored'

export function SpotifyNowPlaying() {
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
          <div className='flex flex-row items-center gap-[3px]'>
            <SpotifyColored
              width='1em'
              height='1em'
              viewBox='0 0 20 20'
              className='size-[0.8em] pb-[1px] lg:size-[0.9em]'
            />
            <h3 className='tracking-tightest font-medium text-gray-700 dark:text-gray-300'>
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
