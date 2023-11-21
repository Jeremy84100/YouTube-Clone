const apiKey = process.env.YOUTUBE_API_KEY;
const maxResults = 10;

export default async function GetAllPlaylist(channelId: string) {
    const res = await fetch(`https://www.googleapis.com/youtube/v3/playlists?channelId=${channelId}&part=snippet,contentDetails&key=AIzaSyDF-ztP33p7igmOTTjx9JfiQZJBgfa05YM&maxResults=${maxResults}`)

    if (!res.ok) throw new Error('failed to fetch data')

    return res.json()
}

