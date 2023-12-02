import GetSearchVideos from "@/lib/GetSearchVideo";
import CardSearch from "@/components/CardSearch";

export default async function SearchPage({
  params,
}: {
  params: { searchId: string };
}) {
  const videosData = GetSearchVideos(params.searchId, null);
  const videoInfo = await videosData;

  return (
    <div className="w-full mt-12">
      {videoInfo.items.map((video: any) => (
        <CardSearch video={video} key={video.id.videoId} />
      ))}
    </div>
  );
}
