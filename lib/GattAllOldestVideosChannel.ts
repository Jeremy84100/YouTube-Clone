const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
const maxResults = 15;

export default async function GattAllOldestVideosChannel(channelId: string) {
    const res = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}`)

    if (!res.ok) throw new Error('failed to fetch data')

    return res.json()
}

