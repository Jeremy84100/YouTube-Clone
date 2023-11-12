"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ChannelNav({ channelId }: { channelId: string }) {
  const currentPath = usePathname();

  const segments = currentPath.split("/");
  const activeLink = segments[segments.length - 1];

  const channelLinkData = [
    {
      name: "Home",
      link: "featured",
    },
    {
      name: "Videos",
      link: "videos",
    },
    {
      name: "Playlists",
      link: "playlists",
    },
    {
      name: "About",
      link: "about",
    },
  ];

  return (
    <div className="flex mt-4">
      {channelLinkData.map((linkData) => (
        <Link
          className="group mr-6"
          href={`/channel/${channelId}/${linkData.link}`}
          key={linkData.link}
          passHref>
          <div className="flex py-2">
            <h3
              className={`text-medium font-medium ${
                activeLink === linkData.link
                  ? "text-white"
                  : "text-detailsYoutube"
              }`}>
              {linkData.name}
            </h3>
          </div>
          <div
            className={`w-full h-0.5 ${
              activeLink === linkData.link
                ? "bg-white"
                : "group-hover:bg-detailsYoutube"
            } rounded-full`}
          />
        </Link>
      ))}
    </div>
  );
}
