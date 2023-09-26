import GetChannel from "@/lib/GetChannel";
import Image from "next/image";
import GetVideo from "@/lib/GetVideo";
import { formatDistanceToNow } from "date-fns";
import More from "./components/More";
import Link from "next/link";
function formatViewCount(viewCount: number) {
  if (viewCount >= 1e7 && viewCount < 1e9) {
    return (viewCount / 1e6).toFixed(0) + "M";
  } else if (viewCount >= 1e6) {
    return (viewCount / 1e6).toFixed(1) + "M";
  } else if (viewCount >= 1e4 && viewCount < 1e6) {
    return (viewCount / 1e3).toFixed(0) + "K";
  } else if (viewCount >= 1e3) {
    return (viewCount / 1e3).toFixed(1) + "K";
  } else {
    return viewCount.toString();
  }
}

function convertDuration(durationString: string) {
  const match = durationString.match(/PT(\d+H)?(\d+M)?(\d+S)?/);

  let hours = "00";
  let minutes = "00";
  let seconds = "00";

  if (match) {
    if (match[1]) {
      hours = match[1].replace("H", "").padStart(2, "0");
    }
    if (match[2]) {
      minutes = match[2].replace("M", "").padStart(2, "0");
    }
    if (match[3]) {
      seconds = match[3].replace("S", "").padStart(2, "0");
    }
  }

  if (hours !== "00") {
    return `${hours}:${minutes}:${seconds}`;
  } else {
    return `${minutes}:${seconds}`;
  }
}

export default async function CardHome({ video }: any) {
  const channelData: Promise<Channel[]> = GetChannel(video.snippet.channelId);
  const channel = await channelData;

  const videoData: Promise<Video> = GetVideo(video.id.videoId);
  const videoInfo = await videoData;

  const viewCount = formatViewCount(
    parseInt(videoInfo.items[0].statistics.viewCount)
  );

  const publishedAt = new Date(video.snippet.publishedAt);
  let timeAgo = formatDistanceToNow(publishedAt, { addSuffix: true });

  timeAgo = timeAgo.replace(/\over\s|\almost\s|\about\s/g, " ");

  const duration = convertDuration(videoInfo.items[0].contentDetails.duration);

  return (
    <div className="flex relative right-1 active:bg-youtube2 rounded-md p-1 flex-col mr-2 mb-8">
      <Link id="image" className="relative" href={`/video/${video.id.videoId}`}>
        <Image
          className="rounded-xl w-full h-full"
          width={400}
          height={100}
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
        />
        <h4 className="absolute bottom-1 right-1 bg-black/80 px-1 py-px rounded text-xs text-white">
          {duration}
        </h4>
      </Link>
      <div>
        <div className="relative flex h-full mt-2">
          <Link className="mr-3" href={`/channel/${video.snippet.channelId}`}>
            <Image
              className="flex self-start mt-1 rounded-full mr-3"
              width={36}
              height={36}
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
                  <Link href={`/channel/${video.snippet.channelId}`}>
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
                  {viewCount} views • {timeAgo}
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
