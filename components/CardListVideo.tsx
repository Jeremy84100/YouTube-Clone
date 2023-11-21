import { convertDuration, formatViewCount } from "@/lib/FormatCount";
import GetChannel from "@/lib/GetChannel";
import GetVideo from "@/lib/GetVideo";
import TimeAgo from "@/lib/TimeAgo";
import Image from "next/image";
import Link from "next/link";
import More from "./CardHome/components/More";

export default async function CardListVideo({
  video,
  index,
}: {
  video: any;
  index: number;
}) {
  const videoData: Promise<Video> = GetVideo(video.snippet.resourceId.videoId);
  const videoInfo = await videoData;


  if (!videoInfo.items || videoInfo.items.length === 0) {
    return null;
  }

  const displayedIndex = index + 1;

  const viewCount = formatViewCount(
    parseInt(videoInfo.items[0].statistics.viewCount)
  );

  const duration = convertDuration(videoInfo.items[0].contentDetails.duration);

  return (
    <div className="group h-28 flex items-center hover:bg-youtube2 rounded-xl px-2">
      <h1 className="mr-4 text-sm ml-2">{displayedIndex}</h1>
      <div className="flex w-full">
        <Link
          id="image"
          className="relative flex-none"
          href={`/video/${video.snippet.resourceId.videoId}`}>
          <Image
            className="rounded-lg"
            width={160}
            height={90}
            quality={10}
            src={video.snippet.thumbnails.medium.url}
            alt={video.snippet.title}
          />
          <h4 className="absolute bottom-1 right-1 bg-black/80 px-1 py-px rounded text-xs text-white">
            {duration}
          </h4>
        </Link>
        <div className="w-full">
          <div className="relative flex justify-between w-full h-full ml-2">
            <div className="flex w-full justify-between">
              <div>
                <Link
                  className="oneLine"
                  href={`/video/${video.snippet.resourceId.videoId}`}>
                  <h2 className="font-semibold twoLines">
                    {video.snippet.title}
                  </h2>
                </Link>
                <div className="flex mt-1 gap-1 oneLine">
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
              <div className="flex items-center pr-2">
                <More />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
