const apiKey = process.env.YOUTUBE_API_KEY;

export default async function GetChannel(channelId: string) {
    const res = await fetch(`https://www.googleapis.com/youtube/v3/channels?key=AIzaSyDF-ztP33p7igmOTTjx9JfiQZJBgfa05YM&id=${channelId}&part=snippet,statistics,brandingSettings`)

    if (!res.ok) throw new Error('failed to fetch data')

    return res.json()
}


