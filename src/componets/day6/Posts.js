import axios from "axios";
import { memo, useEffect, useState } from "react";
import Post from "./Post";

const Posts = ({ user }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const URL = "https://jsonplaceholder.typicode.com/posts";

    axios.get(URL).then(({ data }) => {
      console.log("Api Data inside posts", data);
      setPosts(data);
    });
  }, []);

  console.log("Rendering posts component");

  return (
    <>
      <h2>Logged User is : {user?.name}</h2>
      {posts.map((post) => (
        <Post post={post}></Post>
      ))}
    </>
  );
};

export default memo(Posts);
