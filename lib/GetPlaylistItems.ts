const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
const maxResults = 10;

export default async function GetPlaylistItems(listId: string) {
    const res = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${listId}&key=AIzaSyC3o4fCzbdpgt-MD3jvvdnptovZXnqL0gw&part=snippet,contentDetails
    `)

    if (!res.ok) throw new Error('failed to fetch data')

    return res.json()
}

