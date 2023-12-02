import CardFeaturedVideo from "@/components/Featured/components/CardFeaturedVideo";
import GetPlaylistItems from "@/lib/GetPlaylistItems";
import Link from "next/link";

export default async function CategoryFeatured({ playlist }: any) {
  const playlistItems = GetPlaylistItems(playlist.id);
  const list = await playlistItems;

  if (!list.items || list.items.length === 0) {
    return null;
  }

  return (
    <div className="relative mb-80 twoLine">
      <Link className="text-xl font-bold" href={`/list/${playlist.id}`}>
        {playlist.snippet.title}
      </Link>
      <h4 className="mt-2 text-sm font-light text-textInput oneLine max-w-25">
        {playlist.snippet.description}
      </h4>
      <div className="flex pl-1 absolute w-full overflow-x-auto overflow-hidden mt-6 border-b">
        {list.items.map((video: any, index: number) => (
          <CardFeaturedVideo video={video} key={index} />
        ))}
      </div>
    </div>
  );
}
