import React from "react";
import { postService } from "@/services/postService";
import { PostPersist } from "@/types/vo/post";
import PostCard from "./components/forum/post/PostCard";

function App() {
  const [posts, setPosts] = React.useState<PostPersist[]>(
    []
  );
  React.useEffect(() => {
    const fetchPosts = async () => {
      const res = (
        await postService.listRecent({
          pageIdx: 1,
          pageSize: 10,
        })
      ).data;
      setPosts(res);
    };
    fetchPosts();
  }, []);
  return (
    <>
      {posts.map((post) => (
        <PostCard post={post} />
      ))}
    </>
  );
}

export default App;
