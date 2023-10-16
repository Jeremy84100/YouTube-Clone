const apiKey = process.env.YOUTUBE_API_KEY;

export default async function GetChannel(channelId: string) {
    const res = await fetch(`https://www.googleapis.com/youtube/v3/channels?key=AIzaSyC3o4fCzbdpgt-MD3jvvdnptovZXnqL0gw&id=${channelId}&part=snippet,statistics`)

    if (!res.ok) throw new Error('failed to fetch data')

    return res.json()
}


