import CardListVideo from "@/components/CardListVideo";
import GetChannel from "@/lib/GetChannel";
import GetPlaylist from "@/lib/GetPlaylist";
import GetPlaylistItems from "@/lib/GetPlaylistItems";
import GetVideo from "@/lib/GetVideo";
import Image from "next/image";
import { formatDate } from "@/lib/FormatCount";
import Link from "next/link";
import {
  ArrowDownToLine,
  Forward,
  ListPlus,
  MoreVertical,
  Play,
  Shuffle,
} from "lucide-react";

export default async function List({ params }: { params: { listId: string } }) {
  const listData = GetPlaylistItems(params.listId);
  const list = await listData;

  const playlistData = GetPlaylist(params.listId);
  const playlist = await playlistData;

  const channelData: Promise<Channel> = GetChannel(
    list.items[0].snippet.channelId
  );
  const channel = await channelData;

  const videoData: Promise<Video> = GetVideo(
    list.items[0].snippet.resourceId.videoId
  );
  const videoInfo = await videoData;

  const formattedDate = formatDate(playlist.items[0].snippet.publishedAt);

  return (
    <div className="flex lg:flex-row flex-col pt-6">
      <div>
        <div className="lg:fixed block lg:h-playlist p-6 rounded-2xl bg-slate-600 lg:w-22.5">
          <div className="flex md:items-center lg:flex-col md:flex-row flex-col">
            <Link
              href={`/video/${videoInfo.items[0].id}`}
              passHref
              className="group flex flex-col mb-6 items-center">
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  width="360"
                  height="175"
                  quality={30}
                  src={playlist.items[0].snippet.thumbnails.medium.url}
                  alt={playlist.items[0].snippet.title}
                />
                <div className="absolute transition ease-in-out duration-300 top-0 w-full h-full group-hover:flex bg-black/70 hidden items-center justify-center">
                  <div className="flex items-center">
                    <Play className="w-5 h-5 text-white" />
                    <h4 className="text-xs font-semibold text-white ml-1">
                      PLAY
                    </h4>
                  </div>
                </div>
              </div>
            </Link>
            <div className="lg:ml-0 md:ml-6">
              <h2 className="text-xl twoLines font-bold mb-4">
                {playlist.items[0].snippet.title}
              </h2>
              <div className="flex justify-between flex-row lg:flex-col">
                <div>
                  <div className="flex mb-1">
                    <div className="relative group">
                      <Link
                        className="text-sm font-semibold"
                        href={`/channel/${channel.items[0].id}`}>
                        {channel.items[0].snippet.title}
                      </Link>
                      <div className="opacity-0 whitespace-nowrap group-hover:opacity-100 ease-in duration-100 pointer-events-none top-10 absolute left-0 p-2 rounded-md bg-neutral-600/95">
                        <h4 className="text-xs">
                          {channel.items[0].snippet.title}
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="flex oneLine">
                    <p className="text-xs text-textInput font-medium mr-2">
                      {playlist.items[0].contentDetails.itemCount} videos
                    </p>
                    <p className="text-xs text-textInput font-medium">
                      Created on {formattedDate}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 mt-3">
                  <div className="relative group cursor-pointer hover:bg-neutral-50/20 p-2 rounded-full bg-neutral-50/10">
                    <ListPlus size={20} />
                    <div className="opacity-0 whitespace-nowrap group-hover:opacity-100 ease-in duration-100 pointer-events-none top-14 absolute left-0 p-2 rounded-md bg-neutral-600/95">
                      <h4 className="text-xs">Save playlist</h4>
                    </div>
                  </div>
                  <div className="relative group cursor-pointer hover:bg-neutral-50/20 p-2 rounded-full bg-neutral-50/10">
                    <Forward size={20} />
                    <div className="opacity-0 whitespace-nowrap group-hover:opacity-100 ease-in duration-100 pointer-events-none top-14 absolute left-0 p-2 rounded-md bg-neutral-600/95">
                      <h4 className="text-xs">Share</h4>
                    </div>
                  </div>
                  <div className="relative group cursor-pointer hover:bg-neutral-50/20 p-2 rounded-full bg-neutral-50/10">
                    <ArrowDownToLine size={20} />
                    <div className="opacity-0 whitespace-nowrap group-hover:opacity-100 ease-in duration-100 pointer-events-none top-14 absolute left-0 p-2 rounded-md bg-neutral-600/95">
                      <h4 className="text-xs">Download</h4>
                    </div>
                  </div>
                  <div className="cursor-pointer hover:bg-neutral-50/20 p-2 rounded-full bg-neutral-50/10">
                    <MoreVertical size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-2 w-full mt-4">
            <div className="text-black cursor-pointer flex gap-2 justify-center items-center w-full hover:bg-neutral-200 bg-white py-2 rounded-full">
              <Play size={20} />
              <h4 className="text-sm font-semibold">Play all</h4>
            </div>
            <div className="cursor-pointer flex gap-2 justify-center items-center w-full hover:bg-neutral-50/20 bg-neutral-50/10 py-2 rounded-full">
              <Shuffle size={20} />
              <h4 className="text-sm font-semibold">Shuffle</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:pl-22.5 lg:ml-1 flex flex-col w-full lg:mt-0 mt-1 overflow-hidden">
        {list.items.map((video: any, index: number) => (
          <CardListVideo video={video} index={index} key={video.id.videoId} />
        ))}
      </div>
    </div>
  );
}
