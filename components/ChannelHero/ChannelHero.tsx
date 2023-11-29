import GetChannel from "@/lib/GetChannel";
import Image from "next/image";
import React from "react";
import { formatSubscriberCount } from "@/lib/FormatCount";
import ChannelNav from "./Components/ChannelNav";
import DescriptionHero from "./Components/DescriptionHero";

export default async function ChannelHero({
  channelId,
}: {
  channelId: string;
}) {
  const channelData: Promise<Channel> = GetChannel(channelId);
  const channel = await channelData;

  const subscriberCount = formatSubscriberCount(
    channel.items[0].statistics.subscriberCount
  );

  console.log(channelId);
  return (
    <div className="mb-20">
      {channel.items[0].brandingSettings.image ? (
        <Image
          src={
            channel.items[0].brandingSettings.image.bannerExternalUrl +
            "=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
          }
          alt="Placeholder"
          className="rounded-xl"
          width={1600}
          height={400}
          quality={20}
        />
      ) : null}
      <div className="flex gap-6 pt-4">
        <div>
          <Image
            src={channel.items[0].snippet.thumbnails.medium.url}
            alt="Placeholder"
            className="rounded-full hidden sm:block"
            width={160}
            height={160}
            quality={20}
          />
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl sm:text-4xl font-bold">
            {channel.items[0].snippet.title}
          </h1>
          <h4 className="text-sm text-detailsYoutube">
            {channel.items[0].snippet.customUrl} ‧ {subscriberCount} subscribers
            ‧ {channel.items[0].statistics.videoCount} videos
          </h4>
          <DescriptionHero channel={channel} channelId={channelId} />
          <div className="flex">
            <div className="flex cursor-pointer item-center py-2 px-4 rounded-full bg-white hover:bg-neutral-300 active:bg-neutral-400">
              <h3 className="text-sm text-black font-medium">Subscribe</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <ChannelNav channelId={channelId} />
        <div className="absolute right-0 top-15 w-screen h-px bg-iconsBorderColor" />
      </div>
    </div>
  );
}
