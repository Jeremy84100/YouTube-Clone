import GetVideo from "@/lib/GetVideo";

export default async function Page({
  params,
}: {
  params: { videoId: string };
}) {

  const videoData: Promise<Video> = GetVideo(params.videoId);
  const videoInfo = await videoData;

  return <div>My Post: {params.videoId}</div>;
}
