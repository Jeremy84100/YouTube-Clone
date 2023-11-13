import CardListVideo from "@/components/CardListVideo";
import GetPlaylistItems from "@/lib/GetPlaylistItems";

export default async function List({ params }: { params: { listId: string } }) {
  const listData = GetPlaylistItems(params.listId);
  const list = await listData;

  return (
    <div>
      <div className="flex flex-col">
        {list.items.map((video: any) => (
          <CardListVideo video={video} key={video.id.videoId} />
        ))}
      </div>
    </div>
  );
}
