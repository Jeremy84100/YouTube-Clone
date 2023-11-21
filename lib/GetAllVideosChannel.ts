const apiKey = process.env.YOUTUBE_API_KEY;
const maxResults = 15;

export default async function GetAllVideosChannel(channelId: string) {
    const res = await fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyDF-ztP33p7igmOTTjx9JfiQZJBgfa05YM&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}`)

    if (!res.ok) throw new Error('failed to fetch data')

    return res.json()
}

