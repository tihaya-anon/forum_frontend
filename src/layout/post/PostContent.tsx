import type { FC, ReactNode } from "react";
import type { PostPersist } from "#/vo/post";
import React, { useEffect, useState, memo } from "react";
import useAsyncRequest from "@/hooks/useAsyncRequest";
import { postService } from "@/services/postService";
import PostCard from "@/components/forum/post/PostCard";
import CommonContent from "@/layout/CommonContent";

interface IProps {
  children?: ReactNode;
}

const PostContent: FC<IProps> = () => {
  const [posts, setPosts] = useState<PostPersist[]>([]);
  const listRecent = useAsyncRequest(
    postService.listRecent
  );
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await listRecent.request({
        pageIdx: 1,
        pageSize: 10,
      });
      if (res) {
        setPosts(res.data);
      }
    };
    fetchPosts();
  }, []);
  return (
    <CommonContent>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
        />
      ))}
    </CommonContent>
  );
};

export default memo(PostContent);
