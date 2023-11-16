const apiKey = process.env.YOUTUBE_API_KEY;
const maxResults = 10;

export default async function GetPlaylist(listId: string) {
    const res = await fetch(`https://www.googleapis.com/youtube/v3/playlists?id=${listId}&part=snippet,contentDetails&key=AIzaSyBXhPOc1wSu_Zzj7NKDO3RX6FymyhhHAiw`)

    if (!res.ok) throw new Error('failed to fetch data')

    return res.json()
}

