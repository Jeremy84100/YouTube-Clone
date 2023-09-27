import CardHome from "@/components/CardHome/CardHome";
import GetAllVideos from "@/lib/GetAllVideos";

export default async function VideosHome() {
  const videosData = GetAllVideos();
  const videos = await videosData;

  return (
    <>
      {videos.items.map((video: any) => (
        <CardHome video={video} key={video.id.videoId} />
      ))}
    </>
  );
}
