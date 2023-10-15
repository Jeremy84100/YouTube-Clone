import GetAllComments from "@/lib/GetAllComments";
import CommentCard from "./components/CommentCard";
import Description from "./components/Description";
import Statistics from "./components/Statistics";
import Image from "next/image";

export default async function Video({ video, channel }: any) {
  const commentsData = GetAllComments(video.items[0].id);
  const comments = await commentsData;

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
          <div className="pt-6">
            <h4>{video.statistics.commentCount} Comments</h4>
            <div className="my-6 flex items-center cursor-pointer">
              <Image
                width={40}
                height={40}
                src="https://yt3.ggpht.com/a/default-user=s48-c-k-c0x00ffffff-no-rj"
                alt="channel"
                className="rounded-full"
              />
              <h4 className="w-full border-b border-detailsYoutube/30 text-sm text-detailsYoutube pb-1 ml-4  ">Add a comment...</h4>
            </div>
            {comments.items.map((comment: any) => (
              <CommentCard key={comment.id} comment={comment} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
