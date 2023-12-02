import ChannelHero from "@/components/ChannelHero/ChannelHero";

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { channelId: string };
}) {
  return (
    <div className="flex justify-center">
      <div className="max-w-1600 sm:mx-12">
        <ChannelHero channelId={params.channelId} />
        {children}
      </div>
    </div>
  );
}
