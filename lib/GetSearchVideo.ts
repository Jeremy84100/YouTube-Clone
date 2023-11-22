const apiKey = process.env.YOUTUBE_API_KEY;

export default async function GetSearchVideos(query: any, categoryId: any) {

    if (!categoryId && !query) {
        const res = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${apiKey}&type=video&maxResults=10`)

        if (!res.ok) throw new Error('failed to fetch data')

        return res.json()
    } else if (!categoryId) {
        const res = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${apiKey}&type=video&q=${query}&maxResults=10`)

        if (!res.ok) throw new Error('failed to fetch data')

        return res.json()
    } else if (!query) {
        const res = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${apiKey}&type=video&videoCategoryId=${categoryId}&maxResults=10`)

        if (!res.ok) throw new Error('failed to fetch data')

        return res.json()
    }

    const res = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${apiKey}&type=video&q=${query}&videoCategoryId=${categoryId}&maxResults=10`)

    if (!res.ok) throw new Error('failed to fetch data')


    return res.json()
}


