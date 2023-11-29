import CardHome from "@/components/CardHome/CardHome";
import SortVideos from "@/components/SortVideos";
import GetAllVideosChannel from "@/lib/GetAllVideosChannel";

export default async function Channel({
  params,
  searchParams,
}: {
  params: { channelId: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { sort: sort } = searchParams as { [key: string]: string };

  const videosChannel = GetAllVideosChannel(params.channelId, sort);
  const videos = await videosChannel;

  return (
    <div>
      <SortVideos />
      <div className="relative grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 lg:grid-cols-3">
        {videos.items.map((video: any) => (
          <CardHome key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}
