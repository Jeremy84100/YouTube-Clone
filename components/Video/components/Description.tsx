import TimeAgo from "@/lib/TimeAgo";
import { formatSubscriberCount, formatViewCount } from "@/lib/FormatCount";
import { parseJsonText } from "@/lib/LinkJson";
import Link from "next/link";
import { PlaySquare, UserSquare2 } from "lucide-react";
import Image from "next/image";

export default async function Description({ video, channel }: any) {
  const viewCount = formatViewCount(parseInt(video.statistics.viewCount));

  const descriptionWithLineBreaks = video.snippet.description.replace(
    /\n/g,
    "<br>"
  );

  const parsedDescription = parseJsonText(descriptionWithLineBreaks);

  const subscriberCount = formatSubscriberCount(
    parseInt(channel.items[0].statistics.subscriberCount)
  );

  return (
    <div className="mt-4 w-full p-2.5 rounded-xl bg-detailsButtonYoutbe">
      <div className="flex gap-2 text-sm font-semibold">
        <h2>{viewCount} views</h2>
        <h2>
          <TimeAgo timestamp={video.snippet.publishedAt} ago />
        </h2>
      </div>
      <div>
        <p className="text-sm">{parsedDescription}</p>
      </div>
      <div className="flex items-center border-t-6 border-white/20 py-5 mt-5">
        <Link className="rounded-full" href={`/channel/${channel.items[0].id}`}>
          <Image
            className="rounded-full"
            width={72}
            height={72}
            quality={50}
            src={channel.items[0].snippet.thumbnails.default.url}
            alt="channel"
          />
        </Link>
        <div className="pl-3">
          <div className="relative group">
            <Link
              href={`/channel/${channel.items[0].id}`}
              className="font-semibold">
              {channel.items[0].snippet.title}
            </Link>
          </div>
          <p className="text-sm">{subscriberCount} subscribers</p>
        </div>
      </div>
      <div className="flex">
        <div className="flex gap-3 w-full max-w-3xl">
          <div className="cursor-pointer flex items-center gap-1.5 justify-center py-1.5 border-detailsButtonYoutbeHover hover:bg-detailsButtonYoutbeHover w-full border rounded-full px-4">
            <PlaySquare size={24} className="text-white" />
            <h4 className="text-sm font-semibold ">Videos</h4>
          </div>
          <div className="cursor-pointer flex items-center gap-1.5 justify-center py-1.5 border-detailsButtonYoutbeHover hover:bg-detailsButtonYoutbeHover w-full border rounded-full px-4">
            <UserSquare2 size={24} className="text-white" />
            <h4 className="text-sm font-semibold ">About</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
