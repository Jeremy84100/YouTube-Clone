import Image from "next/image";

export default function CardPlaylist({ playlist }: any) {
  return (
    <div className="flex flex-col items-center mb-6">
      <div>
        <Image
          className="rounded-lg"
          width={210}
          height={118}
          src={playlist.snippet.thumbnails.medium.url}
          alt={playlist.snippet.title}
        />
        <div>
          <h3 className="text-sm py-2 font-medium">{playlist.snippet.title}</h3>
          <h4 className="text-xs mt-2 font-medium">View full playlist</h4>
        </div>
      </div>
    </div>
  );
}
