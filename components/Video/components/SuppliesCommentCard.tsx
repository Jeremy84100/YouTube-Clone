import { formatLikeCommentsCount } from "@/lib/FormatCount";
import TimeAgo from "@/lib/TimeAgo";
import GetChannel from "@/lib/GetChannel";
import { ThumbsDown, ThumbsUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function SuppliesCommentCard({ comment }: any) {
  const channelData = GetChannel(
    comment.snippet.authorChannelId.value
  );
  const channel = await channelData;

  const likeCount = formatLikeCommentsCount(
    parseInt(comment.snippet.likeCount)
  );

  return (
    <div className="flex gap-4 py-2">
      <Link
        className="rounded-full flex-none"
        href={`/channel/${comment.snippet.authorChannelId.value}/featured`}>
        <Image
          width={40}
          height={40}
          src={comment.snippet.authorProfileImageUrl}
          alt="profile"
          className="rounded-full"
        />
      </Link>
      <div key={comment.id}>
        <div className="flex">
          <Link
            className="font-semibold text-xs"
            href={`/channel/${comment.snippet.authorChannelId.value}/featured`}>
            {channel.items[0].snippet.customUrl}
          </Link>
          <h1 className="ml-1 text-xs text-detailsYoutube">
            <TimeAgo
              timestamp={comment.snippet.publishedAt}
              ago
            />
          </h1>
        </div>
        <h1 className="mt-1 text-sm">{comment.snippet.textOriginal}</h1>
        <div className="flex relative items-center right-2 mt-1">
          <div className="flex items-center">
            <div className="relative group cursor-pointer p-2 rounded-full hover:bg-detailsYoutube/30">
              <ThumbsUp size={18} className=" text-white " />
              <div className="opacity-0 whitespace-nowrap group-hover:opacity-100 ease-in duration-100 pointer-events-none bottom-16 left-0 absolute p-2 rounded-md bg-neutral-600/95">
                <h4 className="text-xs">Like</h4>
              </div>
            </div>
            <h3 className={`text-xs text-detailsYoutube mr-2 font-normal `}>
              {likeCount}
            </h3>
          </div>
          <div className="relative group">
            <div className="cursor-pointer p-2 rounded-full hover:bg-detailsYoutube/30">
              <ThumbsDown size={18} className="text-white" />
            </div>
            <div className="opacity-0 whitespace-nowrap group-hover:opacity-100 ease-in duration-100 pointer-events-none bottom-16 left-0 absolute p-2 rounded-md bg-neutral-600/95">
              <h4 className="text-xs">Dislike</h4>
            </div>
          </div>
          <div className="hover:bg-detailsYoutube/30 ml-2 cursor-pointer rounded-full">
            <h3 className="text-xs font-semibold py-2 px-3">Reply</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
