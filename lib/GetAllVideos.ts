const apiKey = process.env.YOUTUBE_API_KEY;
const maxResults = 15;

export default async function GetAllVideos() {
    const res = await fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyC3o4fCzbdpgt-MD3jvvdnptovZXnqL0gw&part=snippet&type=video&maxResults=${maxResults}&order=relevance&eventType=completed`)

    if (!res.ok) throw new Error('failed to fetch data')

    return res.json()
}


