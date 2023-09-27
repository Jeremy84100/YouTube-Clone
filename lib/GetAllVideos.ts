const apiKey = process.env.YOUTUBE_API_KEY;
const maxResults = 5;

export default async function GetAllVideos() {
    const res = await fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyCvV7DOEUAlIuUEwX_K1lZy3ROSgp430m8&part=snippet&type=video&maxResults=${maxResults}`)

    if (!res.ok) throw new Error('failed to fetch data')

    return res.json()
}


