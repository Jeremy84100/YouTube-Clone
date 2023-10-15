import GetChannel from "@/lib/GetChannel";

export default async function Page({
  params,
}: {
  params: { channelId: string };
}) {
  const channelData: Promise<Channel[]> = GetChannel(params.channelId);
  const channel = await channelData;

  return <div>My Post: {channel.items[0].snippet.title}</div>;
}
