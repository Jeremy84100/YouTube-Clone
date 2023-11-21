import CategoryFeatured from "@/components/Featured/CategoryFeatured";
import GetAllPlaylist from "@/lib/GetAllPlaylist";

export default async function Featured({
  params,
}: {
  params: { channelId: string };
}) {
  const playlistsData = GetAllPlaylist(params.channelId);
  const playlists = await playlistsData;

  return (
    <div className="gap-6">
      {playlists.items.map((playlist: any) => (
        <CategoryFeatured playlist={playlist} key={playlist.id} />
      ))}
    </div>
  );
}
