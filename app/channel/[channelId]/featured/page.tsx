import CardFeaturedVideo from "@/components/CardFeaturedVideo";
import GetAllPlaylist from "@/lib/GetAllPlaylist";
import GetPlaylistItems from "@/lib/GetPlaylistItems";
import GetVideo from "@/lib/GetVideo";
import { get } from "http";
import Link from "next/link";

export default async function Featured({
  params,
}: {
  params: { channelId: string };
}) {
  const playlistsData = GetAllPlaylist(params.channelId);
  const playlists = await playlistsData;

  const playlistItems = GetPlaylistItems(playlists.items[0].id);
  const list = await playlistItems;

  return (
    <div className="gap-6">
      {playlists.items.map((playlist: any) => (
        <div className="relative mb-80">
          <Link
            className="text-xl font-bold"
            key={playlist.id}
            href={`/list/${playlist.id}`}>
            {playlist.snippet.title}
          </Link>
          <h4 className="mt-2 text-sm font-light text-textInput oneLine max-w-25">
            {playlist.snippet.description}
          </h4>
          <div className="flex gap-1 pl-1 absolute w-full overflow-x-auto overflow-hidden mt-6 border-b">
            {list.items.map((item: any) => (
              <CardFeaturedVideo video={item} key={item.id} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
