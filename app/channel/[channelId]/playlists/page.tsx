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
      <div className="flex flex-wrap gap-1">
        {playlists.items.map((playlist: any) => (
          <CardPlaylist key={playlist.id} playlist={playlist} />
        ))}
      </div>
    </div>
  );
}
