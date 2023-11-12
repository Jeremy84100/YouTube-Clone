import CardPlaylist from "@/components/CardPlaylist";
import GetAllPlaylist from "@/lib/GetAllPlaylist";

export default async function Playlists({
  params,
}: {
  params: { channelId: string };
}) {
  const playlistsData = GetAllPlaylist(params.channelId);
  const playlists = await playlistsData;

  return (
    <div>
      <h2 className="my-6">Created playlists</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-1">
        {playlists.items.map((playlist: any) => (
          <CardPlaylist key={playlist.id} playlist={playlist} />
        ))}
      </div>
    </div>
  );
}
