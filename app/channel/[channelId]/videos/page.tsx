import CardHome from "@/components/CardHome/CardHome";
import SortVideos from "@/components/SortVideos";
import GetAllVideosChannel from "@/lib/GetAllVideosChannel";
import GetAllPopularChannelVideos from "@/lib/GetAllPopularChannelVideos";
import GattAllOldestVideosChannel from "@/lib/GattAllOldestVideosChannel";

export default async function Channel({
  params,
  searchParams,
}: {
  params: { channelId: string };
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  const allLatestVideosChannel = GetAllVideosChannel(params.channelId);
  const latestVideos = await allLatestVideosChannel;

  const allOldestVideosChannel = GattAllOldestVideosChannel(params.channelId);
  const oldestVideos = await allOldestVideosChannel;

  const allPopularVideosChannel = GetAllPopularChannelVideos(params.channelId);
  const popularVideos = await allPopularVideosChannel;

  const { sort: searchValue } = searchParams as { [key: string]: string };

  return (
    <div>
      <SortVideos />
      <div className="relative right-1 grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 lg:grid-cols-3">
      {searchValue === "popular" ? (
        popularVideos.items.map((video: any) => (
          <CardHome key={video.id} video={video} />
        ))
      ) : searchValue === "oldest" ? (
        oldestVideos.items.map((video: any) => (
          <CardHome key={video.id} video={video} />
        ))
      ) : (
        latestVideos.items.map((video: any) => (
          <CardHome key={video.id} video={video} />
        ))
      )}
      </div>
    </div>
  );
}
