import React, {useState, useEffect} from "react";
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
      console.log(res.map((post) => post.createAt));
    };
    fetchPosts();
  }, []);

  const [darkMode, setDarkMode] = useState<boolean>(false);

  // 从 localStorage 获取用户的主题偏好
  useEffect(() => {
    const storedDarkMode =
      localStorage.getItem("dark-mode") === "true";
    setDarkMode(storedDarkMode);
    if (storedDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("dark-mode", String(newDarkMode)); // 存储主题偏好
  };
  return (
    <>
      <button
        onClick={toggleDarkMode}
        className="p-2 bg-gray-200 dark:bg-gray-800 dark:text-white rounded"
      >
        切换主题
      </button>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
        />
      ))}
    </>
  );
}

export default App;
