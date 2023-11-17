import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CardPlaylist({ playlist }: any) {
  return (
    <Link
      href={`/list/${playlist.id}`}
      passHref
      className="flex flex-col mb-10">
      <div className="relative flex flex-col">
        <div className="absolute bg-zinc-500 rounded-lg bottom-5 w-48 h-24" />
        <div className="group">
          <div className="relative w-52 h-28 rounded-lg overflow-hidden">
            <Image
              width="208"
              height="100"
              quality={20}
              src={playlist.snippet.thumbnails.medium.url}
              alt={playlist.snippet.title}
            />
            <div className="absolute top-0 w-52 h-28 group-hover:flex bg-black/70 hidden items-center justify-center">
              <div className="flex items-center">
                <Play className="w-5 h-5 text-white" />
                <h4 className="text-xs font-semibold text-white ml-1">
                  SEE PLAYLIST
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h3 className="text-sm py-2 font-medium">{playlist.snippet.title}</h3>
          <h4 className="text-xs mt-2 font-medium text-textInput hover:text-white">
            View full playlist
          </h4>
        </div>
      </div>
    </Link>
  );
}
