import Video from "@/components/Video/Video";
import VideoOtherCard from "@/components/Video/components/VideoOtherCard";
import GetChannel from "@/lib/GetChannel";
import GetSearchVideos from "@/lib/GetSearchVideo";
import GetVideo from "@/lib/GetVideo";

export default async function Page({
  params,
}: {
  params: { videoId: string };
}) {
  const videoData: Promise<Video> = GetVideo(params.videoId);
  const videoInfo = await videoData;

  const channelData: Promise<Channel> = GetChannel(
    videoInfo.items[0].snippet.channelId
  );
  const channel = await channelData;

  const videosData = GetSearchVideos(null, null);
  const videos = await videosData;

  return (
    <div className="w-1000 flex flex-col">
      <div className="flex">
        <div className="lg:pr-6 w-full lg:w-9/12 lg:min-w-40">
          <Video video={videoInfo} videos={videos} channel={channel} />
        </div>
        <div className="hidden lg:block">
          {videos.items.map((video: any) => (
            <VideoOtherCard video={video} key={video.id.videoId} />
          ))}
        </div>
      </div>
    </div>
  );
}
