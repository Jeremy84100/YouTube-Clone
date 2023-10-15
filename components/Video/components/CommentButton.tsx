"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function CommentButton({ comment, children }: any) {
  const [showReplies, setShowReplies] = useState(false);

  const handleShowReplies = () => {
    setShowReplies(!showReplies);
  };

  return (
    <div className="flex flex-col">
      <div className="flex">
        <div
          className={`flex items-center cursor-pointer hover:bg-detailsLinks/30 py-2 pl-3 pr-4 rounded-full ${
            comment.snippet.totalReplyCount === 0 && "hidden"
          }`}
          onClick={handleShowReplies}>
          <ChevronDown
            size={20}
            className={`text-detailsLinks mr-2 ${
              showReplies && "transform rotate-180"
            }`}
          />
          <h4 className="text-sm text-detailsLinks font-medium">
            {comment.snippet.totalReplyCount} replies
          </h4>
        </div>
        <div />
      </div>
      <div className={`w-full ${showReplies ? "block" : "hidden"}`}>
        {children}
      </div>
    </div>
  );
}
