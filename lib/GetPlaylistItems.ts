const apiKey = process.env.YOUTUBE_API_KEY;
const maxResults = 10;

export default async function GetPlaylistItems(listId: string) {
    const res = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${listId}&key=AIzaSyBXhPOc1wSu_Zzj7NKDO3RX6FymyhhHAiw&part=snippet,contentDetails
    `)

    if (!res.ok) throw new Error('failed to fetch data')

    return res.json()
}

