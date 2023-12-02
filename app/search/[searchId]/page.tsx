import GetSearchVideos from "@/lib/GetSearchVideo";
import CardSearch from "@/components/CardSearch";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { searchId: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const searchId = params.searchId;

  // fetch data
  const product = await fetch(`https://.../${searchId}`).then((res) =>
    res.json()
  );

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: product.title,
    openGraph: {
      images: ["/some-specific-page-image.jpg", ...previousImages],
    },
  };
}

export default async function SearchPage({ params }: Props) {
  const videosData = GetSearchVideos(params.searchId, null);
  const videoInfo = await videosData;

  return (
    <div className="w-full mt-12">
      {videoInfo.items.map((video: any) => (
        <CardSearch video={video} key={video.id.videoId} />
      ))}
    </div>
  );
}
