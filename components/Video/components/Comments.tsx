import GetAllComments from "@/lib/GetAllComments";
import CommentCard from "./CommentCard";

export default async function Comments({ video }: any) {
  const commentsData = GetAllComments(video.id);
  const comments = await commentsData;

  return (
    <div>
      {comments.items.map((comment: any) => (
        <CommentCard key={comment.id} comment={comment} />
      ))}
    </div>
  );
}
