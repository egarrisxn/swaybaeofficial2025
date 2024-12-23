// Helper function to handle API requests
const fetchFromSpotify = async (endpoint, accessToken) => {
  const response = await fetch(endpoint, {
    headers: {
      Authorization: `Bearer ${accessToken}`, // Adds Authorization header with the access token
    },
  })

  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${endpoint}`)
  }

  return response
}

// Fetches the currently playing track from Spotify API
export const getNowPlaying = async (accessToken) => {
  return fetchFromSpotify('https://api.spotify.com/v1/me/player/currently-playing', accessToken)
}

// Fetches the top tracks from Spotify API
export const getTopTracks = async (accessToken) => {
  return fetchFromSpotify('https://api.spotify.com/v1/me/top/tracks', accessToken)
}
