const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

export default async function GetVideo(videoId: string) {
    const res = await fetch(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet,statistics,contentDetails`)

    if (!res.ok) return undefined

    return res.json()
}