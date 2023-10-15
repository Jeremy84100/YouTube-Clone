const apiKey = process.env.YOUTUBE_API_KEY;

export default async function GetChannel(channelId: string) {
    const res = await fetch(`https://www.googleapis.com/youtube/v3/channels?key=AIzaSyBXhPOc1wSu_Zzj7NKDO3RX6FymyhhHAiw&id=${channelId}&part=snippet,statistics`)

    if (!res.ok) throw new Error('failed to fetch data')

    return res.json()
}


