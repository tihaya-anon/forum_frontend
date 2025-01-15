import type { FC, ReactNode } from "react";
import { memo } from "react";
import { PostPersist } from "@/types/vo/post";
import {
  FaComment,
  FaThumbsUp,
  FaThumbsDown,
  FaCalendarAlt,
  FaUser,
  FaClock,
} from "react-icons/fa"; // 导入所需的图标
import { stringify } from "querystring";

interface IProps {
  children?: ReactNode;
  post: PostPersist;
}

const PostCard: FC<IProps> = ({ post }) => {
  const currentDate = new Date();
  const createDate = new Date(post.createAt);

  const isToday =
    currentDate.getDate() === createDate.getDate() &&
    currentDate.getMonth() === createDate.getMonth() &&
    currentDate.getFullYear() === createDate.getFullYear();

  const getTime = (date: Date) => {
    let AMPM = "";
    let formattedDate = "";
    const hours = date.getHours();
    let HOURS = "";
    if (hours <= 12) {
      AMPM = "AM";
      HOURS = String(hours);
    } else {
      AMPM = "PM";
      HOURS = String(hours - 12);
    }
    formattedDate = `${HOURS} ${AMPM}`;
    return formattedDate;
  };
  const padZero = (num: number) =>
    num < 10 ? `0${num}` : `${num}`;
  let formattedDate = "";
  const hours = getTime(createDate);
  formattedDate = isToday
    ? hours
    : `${createDate.getFullYear()}/${padZero(createDate.getMonth() + 1)}/${padZero(createDate.getDate())} ${hours}`;
  return (
    <div className="bg-white p-5 rounded-lg shadow-lg max-w-xl mx-auto my-4">
      {/* Title */}
      <div className="text-2xl font-bold mb-4">
        {post.title}
      </div>

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
      <div className="flex justify-between text-sm text-gray-600 mb-4">
        {/* Created At Icon (on the left) */}
        <div className="flex items-center space-x-1">
          {isToday ? (
            <FaClock className="text-sm" />
          ) : (
            <FaCalendarAlt className="text-sm" />
          )}
          <span>{formattedDate}</span>
        </div>

        {/* Author Icon (on the right) */}
        <div className="flex items-center space-x-1">
          <FaUser className="text-sm" />
          <span>{post.username}</span>
        </div>
      </div>

      {/* Data: Comment count, Likes, Dislikes */}
      <div className="flex justify-between text-gray-600">
        <div className="flex items-center space-x-1">
          <FaThumbsUp className="text-sm" />
          <span>{post.likes}</span>
        </div>
        <div className="flex items-center space-x-1">
          <FaThumbsDown className="text-sm" />
          <span>{post.dislikes}</span>
        </div>
        <div className="flex items-center space-x-1">
          <FaComment className="text-sm" />
          <span>{post.commentCount}</span>
        </div>
      </div>
    </div>
  );
};

export default memo(PostCard);
