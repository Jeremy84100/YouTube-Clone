import Description from "./components/Description";
import Statistics from "./components/Statistics";
import Image from "next/image";
import Comments from "./components/Comments";
import VideoOtherCard from "./components/VideoOtherCard";
import SortComments from "./components/SortComments";

export default function Video({ video, channel, videos }: any) {
  return (
    <div>
      {video.items.map((video: any) => (
        <div key={video.id.videoId}>
          <div className="relative w-full pb-video">
            <iframe
              src={`https://www.youtube.com/embed/${video.id}`}
              className="rounded-xl absolute top-0 left-0 w-full h-full"
              width="1280"
              height="720"
              allowFullScreen
              title={video.snippet.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
          </div>
          <h1 className="text-lg pt-4 font-semibold">{video.snippet.title}</h1>
          <Statistics video={video} channel={channel} />
          <Description video={video} channel={channel} />
          <div className="block lg:hidden pt-8">
            {videos.items.map((video: any) => (
              <VideoOtherCard video={video} key={video.id.videoId} />
            ))}
          </div>
          <div className="pt-6">
            {video.statistics.commentCount !== "0" &&
            video.snippet.liveBroadcastContent !== "live" &&
            video.statistics.commentCount ? (
              <div>
                <div className="flex">
                  <h4 className="text-xl font-bold">
                    {video.statistics.commentCount} Comments
                  </h4>
                  <SortComments />
                </div>
                <div className="my-6 flex items-center cursor-pointer">
                  <Image
                    width={40}
                    height={40}
                    src="https://yt3.ggpht.com/a/default-user=s48-c-k-c0x00ffffff-no-rj"
                    alt="channel"
                    className="rounded-full"
                  />
                  <h4 className="w-full border-b border-detailsYoutube/30 text-sm text-detailsYoutube pb-1 ml-4  ">
                    Add a comment...
                  </h4>
                </div>
                <Comments video={video} />
              </div>
            ) : video.statistics.commentCount === "0" ? (
              <div>
                <div className="flex">
                  <h4 className="text-xl font-bold">
                    {video.statistics.commentCount} Comments
                  </h4>
                  <SortComments />
                </div>
                <div className="my-6 flex items-center cursor-pointer">
                  <Image
                    width={40}
                    height={40}
                    src="https://yt3.ggpht.com/a/default-user=s48-c-k-c0x00ffffff-no-rj"
                    alt="channel"
                    className="rounded-full"
                  />
                  <h4 className="w-full border-b border-detailsYoutube/30 text-sm text-detailsYoutube pb-1 ml-4  ">
                    Add a comment...
                  </h4>
                </div>
              </div>
            ) : !video.statistics.commentCount ? (
              <h1 className="text-sm py-6 text-center">
                Comments are turned off.{" "}
                <span className="cursor-pointer text-detailsLinks">
                  Learn more
                </span>
              </h1>
            ) : (
              <h1 className="text-sm py-6 text-center">
                Comments are turned off.{" "}
                <span className="cursor-pointer text-detailsLinks">
                  Learn more
                </span>
              </h1>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
