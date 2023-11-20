const apiKey = process.env.YOUTUBE_API_KEY;

export default async function GetVideo(videoId: string) {
    const res = await fetch(`https://www.googleapis.com/youtube/v3/videos?id=AIzaSyCvV7DOEUAlIuUEwX_K1lZy3ROSgp430m8&key=${apiKey}&part=snippet,statistics,contentDetails`)

    if (!res.ok) return undefined

    return res.json()
}