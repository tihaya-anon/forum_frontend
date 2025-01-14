import type { FC, ReactNode } from "react";
import React, { memo } from "react";
import { PostPersist } from "@/types/vo/post";
import { FaComment, FaThumbsUp, FaThumbsDown, FaCalendarAlt, FaUser } from "react-icons/fa";  // 导入所需的图标

interface IProps {
  children?: ReactNode;
  post: PostPersist;
}

const PostCard: FC<IProps> = ({ post }) => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-lg max-w-xl mx-auto my-4">
      {/* Title */}
      <div className="text-2xl font-bold mb-4">{post.title}</div>

      {/* Tag List */}
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tagList.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-200 text-gray-800 py-1 px-3 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Created At and Username */}
      <div className="flex text-sm text-gray-600 mb-4">
        {/* Created At Icon */}
        <div className="flex items-center space-x-1 mr-4">
          <FaCalendarAlt className="text-lg" />
          <span>{post.createAt.toLocaleDateString()}</span>
        </div>
        {/* Author Icon */}
        <div className="flex items-center space-x-1">
          <FaUser className="text-lg" />
          <span>{post.username}</span>
        </div>
      </div>

      {/* Data: Comment count, Likes, Dislikes */}
      <div className="flex justify-between text-gray-600">
        <div className="flex items-center space-x-1">
          <FaComment className="text-lg" />
          <span>{post.commentCount}</span>
        </div>
        <div className="flex items-center space-x-1">
          <FaThumbsUp className="text-lg" />
          <span>{post.likes}</span>
        </div>
        <div className="flex items-center space-x-1">
          <FaThumbsDown className="text-lg" />
          <span>{post.dislikes}</span>
        </div>
      </div>
    </div>
  );
};

export default memo(PostCard);
