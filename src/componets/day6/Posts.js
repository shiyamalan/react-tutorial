import axios from "axios";
import { memo, useEffect, useState } from "react";
import Post from "./Post";

const Posts = ({ user, addPost }) => {
  const [posts, setPosts] = useState([]);
  console.log("Rendering posts component");
  useEffect(() => {
    const URL = "https://jsonplaceholder.typicode.com/posts";

    axios.get(URL).then(({ data }) => {
      console.log("Api Data inside posts", data);
      setPosts(data);
    });
  }, []);

  return (
    <>
      <button
        onClick={() => {
          console.log("Clicked Add Post Button inside posts component");
          addPost();
        }}
      >
        Add Post
      </button>
      <h2>Logged User is : {user?.name}</h2>
      {posts.map((post) => (
        <Post post={post}></Post>
      ))}
    </>
  );
};

export default memo(Posts);
