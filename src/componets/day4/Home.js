import { useContext, useEffect, useState } from "react";
import Profile from "./Profile";
import axios from "axios";
import Posts from "../day6/Posts";
import { UserContext } from "../day5/Login";

const Home = () => {
  const [comment, setComment] = useState({});
  const [showProfile, setShowProfile] = useState(false);

  const [postId, setPostId] = useState(1);
  const [user, setUser] = useState(useContext(UserContext));

  const URL = `https://jsonplaceholder.typicode.com/comments/${postId}`;

  const getNewComment = () => {
    setPostId(postId + 1);
    const USERAPIURL = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    axios.get(USERAPIURL).then(({ data }) => setUser(data));
  };

  useEffect(() => {
    axios.get(URL).then((response) => {
      const { data } = response;

      const { name, body } = data;
      setComment({
        title: name,
        body,
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
          <h1>Random NewsFeed </h1>
          <span style={{ fontWeight: "bold" }}>{comment.title}</span>
          <p>The Content of Post is {comment.body}</p>

          <button onClick={getNewComment}>Get Radom Comment</button>
          <button onClick={goToProfile}>My Profile</button>

          <h1>Application Posts</h1>
          <hr></hr>
          <Posts user={user}></Posts>
        </>
      )}

      {showProfile && <Profile></Profile>}
    </>
  );
};

export default Home;
