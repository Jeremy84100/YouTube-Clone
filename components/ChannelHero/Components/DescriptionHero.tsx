"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DescriptionHero({
  channelId,
  channel,
}: {
  channelId: string;
  channel: any;
}) {
  const currentPath = usePathname();
  const isAboutActive = currentPath.includes("/about");

  return (
    <Link href={`/channel/${channelId}/about`}>
      <div className={`flex ${isAboutActive ? "text-detailsYoutube" : ""}`}>
        <p className="oneLine text-sm text-detailsYoutube max-w-600">
          {channel.items[0].snippet.description}
        </p>
        <ChevronRight className="text-detailsYoutube" size={24} />
      </div>
    </Link>
  );
}
