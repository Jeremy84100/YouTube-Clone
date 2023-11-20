const apiKey = process.env.YOUTUBE_API_KEY;
const maxResults = 10;

export default async function GetPlaylistItems(listId: string) {
    const res = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${listId}&key=AIzaSyCvV7DOEUAlIuUEwX_K1lZy3ROSgp430m8&part=snippet,contentDetails
    `)

    if (!res.ok) throw new Error('failed to fetch data')

    return res.json()
}

