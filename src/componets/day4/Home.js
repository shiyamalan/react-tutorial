import { useEffect, useState } from "react";
import Profile from "./Profile";
import axios from "axios";

const Home = () => {
  const [post, setPost] = useState({});

  const [userId, setuserId] = useState(1);

  let URL = `https://jsonplaceholder.typicode.com/posts/1`;

  const handleAction = () => {
    setuserId(userId + 1);
  };

  useEffect(() => {
    console.log("Calling Useeffect");
    axios.get(URL).then((response) => {
      const { data } = response;

      const { title, body } = data;
      setPost({
        title,
        content: body,
      });
    });
  }, []);

  return (
    <>
      <h1>This is Home Page {new Date().getMilliseconds()}</h1>
      <p>The Tile of Post is {post.title}</p>
      <p>The Content of Post is {post.content}</p>

      <button onClick={handleAction}>Get New Post Id</button>
    </>
  );
};

export default Home;
