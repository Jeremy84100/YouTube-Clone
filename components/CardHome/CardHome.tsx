import GetChannel from "@/lib/GetChannel";
import Image from "next/image";
import GetVideo from "@/lib/GetVideo";
import More from "./components/More";
import Link from "next/link";
import TimeAgo from "@/lib/TimeAgo";
import { formatViewCount, convertDuration } from "@/lib/FormatCount";


export default async function CardHome({ video }: any) {
  const channelData: Promise<Channel> = GetChannel(video.snippet.channelId);
  const channel = await channelData;

  const videoData: Promise<Video> = GetVideo(video.id.videoId);
  const videoInfo = await videoData;

  const viewCount = formatViewCount(
    parseInt(videoInfo.items[0].statistics.viewCount)
  );

  const duration = convertDuration(videoInfo.items[0].contentDetails.duration);

  return (
    <div className="flex relative w-full sm:right-1 active:bg-youtube2 rounded-md sm:p-2 py-2 flex-col mb-8">
      <Link id="image" className="relative" href={`/video/${video.id.videoId}`}>
        <Image
          className="rounded-xl w-full h-full"
          width={400}
          height={100}
          quality={35}
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
        />
        <h4 className="absolute bottom-1 right-1 bg-black/80 px-1 py-px rounded text-xs text-white">
          {duration}
        </h4>
      </Link>
      <div>
        <div className="relative flex h-full mt-2">
          <Link className="mr-3" href={`/channel/${video.snippet.channelId}/featured`}>
            <Image
              className="mt-1 rounded-full mr-3"
              width={36}
              height={36}
              quality={50}
              src={channel.items[0].snippet.thumbnails.default.url}
              alt={channel.items[0].snippet.title}
            />
          </Link>
          <div className="flex group w-full justify-between">
            <div>
              <Link href={`/video/${video.id.videoId}`}>
                <h2 className="font-semibold twoLines">
                  {video.snippet.title}
                </h2>
              </Link>
              <div className="flex mt-1">
                <div className="relative group/name">
                  <div className="opacity-0 whitespace-nowrap group-hover/name:opacity-100 ease-in duration-100 pointer-events-none bottom-10 absolute left-0 p-2 rounded-md bg-neutral-600/95">
                    <h4 className="text-xs">{video.snippet.channelTitle}</h4>
                  </div>
                  <Link href={`/channel/${video.snippet.channelId}/featured`}>
                    <h4 className="text-sm twoLines text-detailsYoutube hover:text-baseYoutube">
                      {video.snippet.channelTitle}
                    </h4>
                  </Link>
                </div>
                <svg
                  className="pl-1 flex opacity-0"
                  fill="#aaa"
                  height="18"
                  viewBox="0 0 24 24"
                  width="18"
                  focusable="false">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM9.8 17.3l-4.2-4.1L7 11.8l2.8 2.7L17 7.4l1.4 1.4-8.6 8.5z"></path>
                </svg>
              </div>
              <Link href={`/video/${video.id.videoId}`}>
                <h4 className="text-sm text-detailsYoutube self-center">
                  {viewCount} views •{" "}
                  <TimeAgo timestamp={video.snippet.publishedAt} />
                </h4>
              </Link>
            </div>
            <More />
          </div>
        </div>
      </div>
    </div>
  );
}
