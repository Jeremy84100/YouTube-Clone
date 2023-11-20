const apiKey = process.env.YOUTUBE_API_KEY;
const maxResults = 10;

export default async function GetAllPlaylist(channelId: string) {
    const res = await fetch(`https://www.googleapis.com/youtube/v3/playlists?channelId=${channelId}&part=snippet,contentDetails&key=AIzaSyCvV7DOEUAlIuUEwX_K1lZy3ROSgp430m8&maxResults=${maxResults}`)

    if (!res.ok) throw new Error('failed to fetch data')

    return res.json()
}

