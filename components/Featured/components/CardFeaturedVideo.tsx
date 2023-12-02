import Image from "next/image";
import GetVideo from "@/lib/GetVideo";
import Link from "next/link";
import TimeAgo from "@/lib/TimeAgo";
import { formatViewCount, convertDuration } from "@/lib/FormatCount";

export default async function CardFeaturedVideo({ video }: any) {
  const videoData: Promise<Video> = GetVideo(video.contentDetails.videoId);
  const videoInfo = await videoData;

  if (!videoInfo.items || videoInfo.items.length === 0) {
    return null;
  }

  const viewCount = formatViewCount(
    parseInt(videoInfo.items[0].statistics.viewCount)
  );

  const duration = convertDuration(videoInfo.items[0].contentDetails.duration);

  return (
    <div className="flex relative sm:right-1 active:bg-youtube2 rounded-md py-2 px-0.5 flex-col mb-8">
      <Link
        id="image"
        className="relative w-52"
        href={`/video/${video.snippet.resourceId.videoId}`}>
        <Image
          className="rounded-xl"
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
          <div className="flex group w-full justify-between">
            <div>
              <Link href={`/video/${video.id.videoId}`}>
                <h2 className="font-semibold twoLines w-52">
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
          </div>
        </div>
      </div>
    </div>
  );
}
