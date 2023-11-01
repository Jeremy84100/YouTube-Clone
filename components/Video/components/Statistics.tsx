import { MoreHorizontal, ThumbsDown, ThumbsUp } from "lucide-react";
import { formatSubscriberCount } from "@/lib/FormatCount";
import { formatLikeCount } from "@/lib/FormatCount";
import Link from "next/link";
import Image from "next/image";

export default async function Statistics({ video, channel }: any) {
  const subscriberCount = formatSubscriberCount(
    parseInt(channel.items[0].statistics.subscriberCount)
  );

  const likeCount = formatLikeCount(parseInt(video.statistics.likeCount));

  return (
    <div className="flex flex-col sm:flex-row relative w-full justify-between sm:items-center pt-2">
      <div className="inline-flex justify-between sm:justify-normal items-center pb-4 sm:pb-0">
        <div className="flex">
          <Link
            className="flex-none rounded-full"
            href={`/channel/${channel.items[0].id}/featured`}>
            <Image
              width={40}
              height={40}
              className="rounded-full"
              src={channel.items[0].snippet.thumbnails.default.url}
              quality={20}
              alt="channel"
            />
          </Link>
          <div className="pl-3">
            <div className="relative group">
              <Link
                href={`/channel/${channel.items[0].id}/featured`}
                className="font-semibold oneLine">
                {channel.items[0].snippet.title}
              </Link>
              <div className="opacity-0 whitespace-nowrap group-hover:opacity-100 ease-in duration-100 pointer-events-none bottom-16 absolute p-2 rounded-md bg-neutral-600/95">
                <h4 className="text-xs ">{channel.items[0].snippet.title}</h4>
              </div>
            </div>
            <p className="text-xs text-detailsYoutube">
              {subscriberCount} subscribers
            </p>
          </div>
        </div>
        <div className="flex ml-6 cursor-pointer item-center py-2 px-4 rounded-full bg-white hover:bg-neutral-300 active:bg-neutral-400">
          <h3 className="text-sm text-black font-medium">Subscribe</h3>
        </div>
      </div>
      <div className="flex justify-end gap-2">
        <div className="flex lg:ml-10">
          <div className="flex cursor-pointer items-center sm:ml-6 rounded-full bg-detailsButtonYoutbe ">
            <div className="group relative rounded-s-full bg-detailsButtonYoutbe py-2 pl-3 pr-1 hover:bg-neutral-300/10 flex">
              <ThumbsUp size={20} className="text-white" />
              {video.statistics.likeCount ? (
                <h3 className="text-sm text-white mx-2 font-medium">
                  {likeCount}
                </h3>
              ) : (
                <h3 className="text-sm text-white mx-2 font-medium">Like</h3>
              )}
              <div className="opacity-0 whitespace-nowrap group-hover:opacity-100 ease-in duration-100 pointer-events-none bottom-16 absolute left-3 p-2 rounded-md bg-neutral-600/95">
                <h4 className="text-xs">I like this</h4>
              </div>
            </div>
            <div className="h-2/3 w-px bg-neutral-400 "></div>
            <div className="group relative rounded-e-full bg-detailsButtonYoutbe px-3 py-2 flex hover:bg-neutral-300/10">
              <ThumbsDown size={20} className="text-white" />
              <div className="opacity-0 whitespace-nowrap group-hover:opacity-100 ease-in duration-100 pointer-events-none bottom-16 absolute right-0 p-2 rounded-md bg-neutral-600/95">
                <h4 className="text-xs">I dislike this</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="group relative cursor-pointer rounded-full bg-detailsButtonYoutbe">
          <div className="rounded-full px-3 py-1.5 flex items-center hover:bg-neutral-300/10">
            <svg
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              fill="white">
              <path d="M15 5.63 20.66 12 15 18.37V14h-1c-3.96 0-7.14 1-9.75 3.09 1.84-4.07 5.11-6.4 9.89-7.1l.86-.13V5.63M14 3v6C6.22 10.13 3.11 15.33 2 21c2.78-3.97 6.44-6 12-6v6l8-9-8-9z"></path>
            </svg>
            <h3 className="text-sm text-white mx-2 font-medium">Share</h3>
          </div>
          <div className="opacity-0 whitespace-nowrap group-hover:opacity-100 ease-in duration-100 pointer-events-none bottom-16 absolute left-6 p-2 rounded-md bg-neutral-600/95">
            <h4 className="text-xs">Share</h4>
          </div>
        </div>
        <div className="group relative cursor-pointer rounded-full bg-detailsButtonYoutbe hidden xl:block ">
          <div className="rounded-full flex items-center px-2 py-1.5 hover:bg-neutral-300/10">
            <svg
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              fill="white">
              <path d="M22 13h-4v4h-2v-4h-4v-2h4V7h2v4h4v2zm-8-6H2v1h12V7zM2 12h8v-1H2v1zm0 4h8v-1H2v1z"></path>
            </svg>
            <h3 className="text-sm text-white mx-2 font-medium">Save</h3>
          </div>
          <div className="opacity-0 whitespace-nowrap group-hover:opacity-100 ease-in duration-100 pointer-events-none bottom-16 absolute left-6 p-2 rounded-md bg-neutral-600/95">
            <h4 className="text-xs">Save</h4>
          </div>
        </div>
        <div className="cursor-pointer rounded-full bg-detailsButtonYoutbe">
          <div className="rounded-full px-2 py-2 flex hover:bg-neutral-300/10">
            <MoreHorizontal size={20} className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
