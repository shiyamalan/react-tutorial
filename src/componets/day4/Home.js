import { useContext, useEffect, useState } from "react";
import Profile from "./Profile";
import axios from "axios";

const Home = (props) => {
  const [post, setPost] = useState({});
  const [showProfile, setShowProfile] = useState(false);

  const [userId, setuserId] = useState(1);

  let URL = `https://jsonplaceholder.typicode.com/posts/1`;

  const handleAction = () => {
    setuserId(userId + 1);
  };

  useEffect(() => {
    axios.get(URL).then((response) => {
      const { data } = response;

      const { title, body } = data;
      setPost({
        title,
        content: body,
      });
    });
  }, [URL]);

  const goToProfile = () => {
    setShowProfile(true);
  };

  return (
    <>
      {!showProfile && (
        <>
          <h1>Welcome User </h1>
          <span style={{ fontWeight: "bold" }}>{post.title}</span>
          <p>The Content of Post is {post.content}</p>

          <button onClick={handleAction}>Get New Post Id</button>
          <button onClick={goToProfile}>My Profile</button>
        </>
      )}

      {showProfile && <Profile></Profile>}
    </>
  );
};

export default Home;
