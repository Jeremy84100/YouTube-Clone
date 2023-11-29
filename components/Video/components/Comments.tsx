import GetAllComments from "@/lib/GetAllComments";
import CommentCard from "./CommentCard";

export default async function Comments({
  video,
  searchParams,
}: {
  video: any;
  searchParams?: { [key: string]: string | string[] | undefined };
}) {

  let sort = searchParams?.search ?? "";

  console.log(sort);

  const comments = await GetAllComments(video.id, null);

  return (
    <div>
      {comments.items.map((comment: any) => (
        <CommentCard key={comment.id} comment={comment} />
      ))}
    </div>
  );
}
