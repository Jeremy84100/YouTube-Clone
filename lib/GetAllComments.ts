const apiKey = process.env.YOUTUBE_API_KEY;
const maxResults = 20;

export default async function GetAllComments(videoId: string) {
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&order=relevance&videoId=${videoId}&key=AIzaSyCvV7DOEUAlIuUEwX_K1lZy3ROSgp430m8`
    );

  if (!res.ok) throw new Error("failed to fetch data");

  return res.json();
}
