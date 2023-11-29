import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CardPlaylist({ playlist }: any) {
  if (playlist.contentDetails.itemCount === 0) {
    return null;
  }

  return (
    <Link
      href={`/list/${playlist.id}`}
      passHref
      className="flex flex-col mb-10">
      <div className="relative flex flex-col ">
        <div className="group rounded-lg">
          <div className="relative w-full h-full flex justify-center">
            <div className="absolute bg-zinc-500 -z-10 rounded-lg bottom-1 w-4/5 h-full" />
            <Image
              width="208"
              height="100"
              quality={20}
              className="rounded-lg w-full h-full"
              src={playlist.snippet.thumbnails.medium.url}
              alt={playlist.snippet.title}
            />
            <div className="rounded-lg absolute top-0 w-full h-full group-hover:flex bg-black/70 hidden items-center justify-center">
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
