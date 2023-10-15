import Video from "@/components/Video/Video";
import VideoOtherCard from "@/components/Video/components/VideoOtherCard";
import GetAllVideos from "@/lib/GetAllVideos";
import GetChannel from "@/lib/GetChannel";
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

  const videosData = GetAllVideos();
  const videos = await videosData;

  return (
    <div className="w-1000 flex flex-col">
      <div className="flex">
        <div className="pr-6 w-9/12">
          <Video video={videoInfo} channel={channel} />
        </div>
        <div>
          {videos.items.map((video: any) => (
            <VideoOtherCard video={video} key={video.id.videoId} />
          ))}
        </div>
      </div>
    </div>
  );
}
