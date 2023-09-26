import Categories from "@/components/Categories";
import VideosHome from "@/components/VideosHome";

export default function Home() {
  return (
      <div>
        <Categories />
        <div className="pt-5 relative top-28 grid grid-cols-1 sm:grid-cols-2 3xl:grid-cols-5 2xl:grid-cols-4 lg:grid-cols-3">
          <VideosHome />
        </div>
      </div>
  );
}
