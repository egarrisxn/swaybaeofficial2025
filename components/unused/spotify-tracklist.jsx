'use client'
import {useEffect, useState} from 'react'
import {getTopTracksList} from '@/lib/spotify/dataHandler'

const Track = ({ranking, songUrl, title, artist}) => {
  return (
    <div className='mt-3 flex flex-row items-baseline border-b-2 border-foreground/30'>
      <p className='lg:text-yellow-500 2xl:text-base dark:text-yellow-300'>{ranking}</p>
      <div className='flex flex-col pl-2 lg:text-base 2xl:text-2xl'>
        <a
          className='w-60 truncate font-semibold text-zinc-900 sm:w-96 2xl:w-[30rem] dark:text-zinc-100'
          href={songUrl}
          target='_blank'
          rel='noopener noreferrer'
        >
          {title}
        </a>
        <p className='mb-2 w-60 truncate text-zinc-500 sm:w-96 2xl:w-[30rem]'>{artist}</p>
      </div>
    </div>
  )
}

export function SpotifyTrackList() {
  const [loading, setLoading] = useState(true)
  const [tracks, setTracks] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {tracks} = await getTopTracksList()
        setTracks(tracks)
      } catch (error) {
        console.error('Error fetching top tracks:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      {loading ? (
        <section className='flex-grow font-bold sm:text-base'>Loading..</section>
      ) : (
        <section>
          <div className='border-b-2 border-foreground'>
            <h3 className='mb-2 font-bold'>Top tracks for the week.</h3>
          </div>

          <div>
            {tracks.map((track, index) => (
              <Track ranking={index + 1} key={track.songUrl} {...track} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
