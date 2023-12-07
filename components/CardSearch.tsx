import More from "@/components/CardHome/components/More";
import { formatViewCount } from "@/lib/FormatCount";
import GetChannel from "@/lib/GetChannel";
import GetVideo from "@/lib/GetVideo";
import TimeAgo from "@/lib/TimeAgo";
import Image from "next/image";
import Link from "next/link";

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

export default async function VideoOtherCard({ video }: { video: any }) {
  const videoData: Promise<Video> = GetVideo(video.id.videoId);
  const videoInfo = await videoData;

  const channelData: Promise<Channel> = GetChannel(video.snippet.channelId);
  const channel = await channelData;

  const viewCount = formatViewCount(
    parseInt(videoInfo.items[0].statistics.viewCount)
  );

  const duration = convertDuration(videoInfo.items[0].contentDetails.duration);

  return (
    <div className="flex flex-col mobileL:flex-row relative mb-2 right-1 gap-4 active:bg-youtube2 rounded-md p-1 overflow-hidden">
      <Link
        id="image"
        className="flex-none relative"
        href={`/video/${video.id.videoId}`}>
        <Image
          className="rounded-lg w-full"
          width={360}
          height={201}
          quality={50}
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
        />
        <h4 className="absolute bottom-1 right-1 bg-black/80 px-1 py-px rounded text-xs text-white">
          {duration}
        </h4>
      </Link>
      <div>
        <div className="relative flex h-full">
          <div className="flex group w-full justify-between">
            <div>
              <Link href={`/video/${video.id.videoId}`}>
                <h2 className="font-semibold text-sm twoLines mb-1">
                  {video.snippet.title}
                </h2>
              </Link>
              <Link href={`/video/${video.id.videoId}`}>
                <h4 className="text-xs text-detailsYoutube oneLine self-center">
                  {viewCount} views •{" "}
                  <TimeAgo timestamp={video.snippet.publishedAt} />
                </h4>
              </Link>
              <div className="flex py-3 items-center">
                <Image
                  className="rounded-full"
                  width={24}
                  height={24}
                  quality={10}
                  src={channel.items[0].snippet.thumbnails.default.url}
                  alt={channel.items[0].snippet.title}
                />
                <Link
                  href={`/channel/${video.snippet.channelId}/featured`}
                  className="relative group/name pl-2">
                  <div className="opacity-0 whitespace-nowrap group-hover/name:opacity-100 ease-in duration-100 pointer-events-none bottom-10 absolute left-0 p-2 rounded-md bg-neutral-600/95">
                    <h4 className="text-xs">{video.snippet.channelTitle}</h4>
                  </div>

                  <h4 className="text-xs oneLine text-detailsYoutube hover:text-baseYoutube">
                    {video.snippet.channelTitle}
                  </h4>
                </Link>
              </div>
              <Link
                href={`/video/${video.id.videoId}`}
                className="mobileL:block hidden ">
                <p className="oneLine text-xs text-detailsYoutube">{video.snippet.description}</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
