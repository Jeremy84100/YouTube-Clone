const apiKey = process.env.YOUTUBE_API_KEY;

export default async function GetVideo(videoId: string) {
    const res = await fetch(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=AIzaSyBXhPOc1wSu_Zzj7NKDO3RX6FymyhhHAiw&part=snippet,statistics,contentDetails`)

    if (!res.ok) return undefined

    return res.json()
}