const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
const maxResults = 15;

export default async function GetAllVideosChannel(channelId: string, sort: string) {
    if(sort === 'latest') sort = 'date'
    if(sort === 'oldest') sort = 'date'
    if(sort === 'popular') sort = 'viewCount'
    if(!sort) sort = 'date'
    const res = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=${sort}&maxResults=${maxResults}`)

    if (!res.ok) throw new Error('failed to fetch data')

    return res.json()
}

