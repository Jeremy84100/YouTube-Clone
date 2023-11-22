import Categories from "@/components/Categories";
import CardHome from "@/components/CardHome/CardHome";
import GetSearchVideos from "@/lib/GetSearchVideo";
import GetCategoryVideos from "@/lib/GetCategoryVideos";

export default async function Home({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  let { category: category } = searchParams as { [key: string]: string };

  const videosData = GetSearchVideos(null, category);
  const videos = await videosData;

  const dataCategories = GetCategoryVideos();
  const categories = await dataCategories;


  return (
    <div className="relative w-full">
      <div className="flex w-full top-14 bg-backgrounStartRgb z-10 fixed overflow-x-auto overflow-hidden">
        <Categories categories={categories} />
      </div>
      <div className="pt-5 relative top-14 grid grid-cols-1 mobileL:grid-cols-2 sm:grid-cols-3 2xl:grid-cols-5 lg:grid-cols-4">
        {videos.items.map((video: any) => (
          <CardHome video={video} key={video.id.videoId} />
        ))}
      </div>
    </div>
  );
}
