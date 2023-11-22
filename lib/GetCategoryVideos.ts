const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

export default async function GetCategoryVideos() {
    const res = await fetch(`https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=US&key=AIzaSyC3o4fCzbdpgt-MD3jvvdnptovZXnqL0gw`)

    if (!res.ok) throw new Error('failed to fetch data')

    return res.json()
}


