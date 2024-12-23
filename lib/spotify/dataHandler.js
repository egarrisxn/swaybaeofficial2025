import {getNowPlaying, getTopTracks} from './spotifyApi'

// Fetches an access token from the server
export async function getAccessToken() {
  const response = await fetch('/api/spotify', {method: 'POST'})
  if (!response.ok) {
    throw new Error('Failed to fetch access token')
  }
  return await response.json() // Returns the access token as JSON
}

// Retrieves the currently playing track
export async function getNowPlayingItem() {
  try {
    const {access_token} = await getAccessToken() // Fetches the above access token
    const response = await getNowPlaying(access_token) // Fetches the currently playing track

    if (response.status === 204 || response.status > 400) {
      return {
        isPlaying: false,
        albumImageUrl: '',
        artist: '',
        songUrl: '',
        title: '',
      }
    }

    const nowPlayingData = await response.json() // Parses the response JSON
    const song = nowPlayingData.item
    const albumImageUrl = song.album.images[0].url
    const artist = song.artists.map((_artist) => _artist.name).join(', ')
    const isPlaying = nowPlayingData.is_playing
    const songUrl = song.external_urls.spotify
    const title = song.name

    return {
      albumImageUrl,
      artist,
      isPlaying,
      songUrl,
      title,
    }
  } catch (error) {
    console.error('Error fetching now playing item:', error)
    return {
      isPlaying: false,
      albumImageUrl: '',
      artist: '',
      songUrl: '',
      title: '',
    }
  }
}

// Retrieves a list of top tracks
export async function getTopTracksList() {
  try {
    const {access_token} = await getAccessToken() // Fetches the access token
    const response = await getTopTracks(access_token) // Fetches the top tracks

    if (response.status === 204 || response.status > 400) {
      return {tracks: []}
    }

    const topTracksData = await response.json() // Parses the response JSON
    const tracks = topTracksData.items.slice(0, 5).map((track) => ({
      albumImageUrl: track.album.images[0].url,
      artist: track.artists.map((_artist) => _artist.name).join(', '),
      songUrl: track.external_urls.spotify,
      title: track.name,
    }))

    return {tracks} // Returns the list of top tracks
  } catch (error) {
    console.error('Error fetching top tracks:', error)
    return {tracks: []} // Returns an empty array in case of error
  }
}
