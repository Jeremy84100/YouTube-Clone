import CardListVideo from "@/components/CardListVideo";
import GetChannel from "@/lib/GetChannel";
import GetPlaylist from "@/lib/GetPlaylist";
import GetPlaylistItems from "@/lib/GetPlaylistItems";
import GetVideo from "@/lib/GetVideo";
import Image from "next/image";
import { formatDate } from "@/lib/FormatCount";
import Link from "next/link";
import { Play } from "lucide-react";

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
    <div className="flex pt-6">
      <div>
        <div className="fixed flex h-playlist pb-9 flex-col p-6 rounded-2xl bg-slate-600 w-22.5">
          <Link
            href={`/video/${videoInfo.items[0].id}`}
            passHref
            className="group flex flex-col mb-10 items-center">
            <div className="relative rounded-lg overflow-hidden">
              <Image
                width="360"
                height="175"
                quality={30}
                src={playlist.items[0].snippet.thumbnails.medium.url}
                alt={playlist.items[0].snippet.title}
              />
              <div className="absolute top-0 w-full h-full group-hover:flex bg-black/70 hidden items-center justify-center">
                <div className="flex items-center">
                  <Play className="w-5 h-5 text-white" />
                  <h4 className="text-xs font-semibold text-white ml-1">
                    PLAY
                  </h4>
                </div>
              </div>
            </div>
          </Link>
          <h2 className="text-xl twoLines font-bold mb-4">
            {playlist.items[0].snippet.title}
          </h2>
          <div className="flex">
            <div className="relative group">
              <Link
                className="text-sm font-semibold"
                href={`/channel/${channel.items[0].id}`}>
                {channel.items[0].snippet.title}
              </Link>
              <div className="opacity-0 whitespace-nowrap group-hover:opacity-100 ease-in duration-100 pointer-events-none top-10 absolute left-0 p-2 rounded-md bg-neutral-600/95">
                <h4 className="text-xs">{channel.items[0].snippet.title}</h4>
              </div>
            </div>
          </div>
          <div className="flex">
            <p className="text-xs text-textInput font-medium mr-2">
              {playlist.items[0].contentDetails.itemCount} videos
            </p>
            <p className="text-xs text-textInput font-medium">
              Created on {formattedDate}
            </p>
          </div>
        </div>
      </div>
      <div className="pl-22.5 ml-1 flex flex-col w-full">
        {list.items.map((video: any, index: number) => (
          <CardListVideo video={video} index={index} key={video.id.videoId} />
        ))}
      </div>
    </div>
  );
}
