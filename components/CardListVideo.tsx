import { convertDuration, formatViewCount } from "@/lib/FormatCount";
import GetChannel from "@/lib/GetChannel";
import GetVideo from "@/lib/GetVideo";
import TimeAgo from "@/lib/TimeAgo";
import Image from "next/image";
import Link from "next/link";
import More from "./CardHome/components/More";

export default async function CardListVideo({ video }: { video: any }) {
  const channelData: Promise<Channel> = GetChannel(video.snippet.channelId);
  const channel = await channelData;

  const videoData: Promise<Video> = GetVideo(video.snippet.resourceId.videoId);
  const videoInfo = await videoData;

  const viewCount = formatViewCount(
    parseInt(videoInfo.items[0].statistics.viewCount)
  );

  const duration = convertDuration(videoInfo.items[0].contentDetails.duration);

  return (
    <div className="flex relative w-full right-1 active:bg-youtube2 rounded-md p-2">
      <Link
        id="image"
        className="relative"
        href={`/video/${video.snippet.resourceId.videoId}`}>
        <Image
          className="rounded-xl w-full h-full"
          width={160}
          height={90}
          quality={50}
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
        />
        <h4 className="absolute bottom-1 right-1 bg-black/80 px-1 py-px rounded text-xs text-white">
          {duration}
        </h4>
      </Link>
      <div className="w-full">
        <div className="relative flex justify-between w-full h-full ml-2">
          <div className="flex group w-full justify-between">
            <div>
              <Link href={`/video/${video.snippet.resourceId.videoId}`}>
                <h2 className="font-semibold twoLines">
                  {video.snippet.title}
                </h2>
              </Link>
              <div className="flex mt-1 gap-1">
                <div className="relative group/name">
                  <div className="opacity-0 whitespace-nowrap group-hover/name:opacity-100 ease-in duration-100 pointer-events-none bottom-10 absolute left-0 p-2 rounded-md bg-neutral-600/95">
                    <h4 className="text-xs">{video.snippet.channelTitle}</h4>
                  </div>
                  <Link href={`/channel/${video.snippet.channelId}/featured`}>
                    <h4 className="text-xs twoLines text-detailsYoutube hover:text-baseYoutube">
                      {video.snippet.channelTitle}
                    </h4>
                  </Link>
                </div>
                <Link href={`/video/${video.snippet.resourceId.videoId}`}>
                  <h4 className="text-xs text-detailsYoutube self-center">
                    • {viewCount} views •{" "}
                    <TimeAgo timestamp={video.snippet.publishedAt} />
                  </h4>
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              <More />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
