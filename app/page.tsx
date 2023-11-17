import Categories from "@/components/Categories";
import CardHome from "@/components/CardHome/CardHome";
import GetAllVideos from "@/lib/GetAllVideos";

export default async function Home() {
  const videosData = GetAllVideos();
  const videos = await videosData;
  return (
    <div>
      <Categories />
      <div className="pt-5 relative top-14 grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-5 lg:grid-cols-3">
        {videos.items.map((video: any) => (
          <CardHome video={video} key={video.id.videoId} />
        ))}
      </div>
    </div>
  );
}
