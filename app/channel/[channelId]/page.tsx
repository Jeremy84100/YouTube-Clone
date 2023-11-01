import GetChannel from "@/lib/GetChannel";

export default async function Channel({
  params,
}: {
  params: { channelId: string };
}) {
  const channelData: Promise<Channel[]> = GetChannel(params.channelId);
  const channel = await channelData;

  return <div>My Post:</div>;
}
