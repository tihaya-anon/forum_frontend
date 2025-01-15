import type { PostPersist } from "#/vo/post";
import type { FC, ReactNode } from "react";
import { memo } from "react";
import {
  FaComment,
  FaThumbsUp,
  FaThumbsDown,
  FaCalendarAlt,
  FaUser,
  FaClock,
} from "react-icons/fa"; // 导入所需的图标

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

  const rowStyle = "flex items-center space-x-1";

  return (
    <div className="bg-white dark:bg-theme-base-900 dark:text-white px-5 py-2 rounded-lg shadow-lg max-w-xl mx-auto my-4">
      {/* Tag List */}
      <div className={`flex flex-wrap gap-2 mb-3`}>
        {post.tagList.map((tag, index) => (
          <span
            key={index}
            className="bg-blue-100 dark:bg-theme-base-700 text-gray-800 dark:text-white py-1 px-3 rounded-full text-xs"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Title */}
      <div
        className={`text-${post.title.length > 10 ? "base" : "xl"} font-${post.title.length > 10 ? "normal" : "bold"} mb-2.5`}
      >
        {post.title.slice(0, 75) +
          (post.title.length > 75 ? "..." : "")}
      </div>

      {/* Created At and Username */}
      <div
        className={`flex justify-between text-sm text-theme-base-600 dark:text-theme-base-500 mb-2.5`}
      >
        {/* Created At Icon (on the left) */}
        <div className={rowStyle}>
          {isToday ? (
            <FaClock className="text-xs" />
          ) : (
            <FaCalendarAlt className="text-xs" />
          )}
          <span>{formattedDate}</span>
        </div>

        {/* Author Icon (on the right) */}
        <div className={rowStyle}>
          <FaUser className="text-xs" />
          <span>{post.username}</span>
        </div>
      </div>

      {/* Data: Comment count, Likes, Dislikes */}
      <div className="flex justify-between text-theme-base-600 dark:text-theme-base-300">
        <div className={rowStyle}>
          <FaComment className="text-sm" />
          <span>{post.commentCount}</span>
        </div>
        <div className={rowStyle}>
          <FaThumbsDown className="text-sm" />
          <span>{post.dislikes}</span>
        </div>

        <div className={rowStyle}>
          <FaThumbsUp className="text-sm" />
          <span>{post.likes}</span>
        </div>
      </div>
    </div>
  );
};

export default memo(PostCard);
