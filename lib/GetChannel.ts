const apiKey = process.env.YOUTUBE_API_KEY;

export default async function GetChannel(channelId: string) {
    const res = await fetch(`https://www.googleapis.com/youtube/v3/channels?key=AIzaSyCvV7DOEUAlIuUEwX_K1lZy3ROSgp430m8&id=${channelId}&part=snippet`)

    if (!res.ok) throw new Error('failed to fetch data')

    return res.json()
}


