import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import Profile from "./Profile";
import axios from "axios";
import Posts from "../day6/Posts";
import { UserContext } from "../day5/Login";

const Home = (abc) => {
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState(useContext(UserContext));
  const USERAPIURL = `https://jsonplaceholder.typicode.com/users/${userId}`;
  console.log("Rendering Home page for user id", userId);

  const setNewUser = () => {
    console.log("Clicked New User");
    axios.get(USERAPIURL).then(({ data }) => setUser(data));
  };

  const setNewUserId = () => {
    console.log("Clicked New User Id");
    setUserId((prev) => prev + 1);
  };

  const addPost = useCallback(() => {
    console.log("Adding new post inside Home Component");
  }, [userId]);

  return (
    <>
      <button onClick={setNewUser} style={{ padding: "10px" }}>
        New User
      </button>

      <br></br>
      <button onClick={setNewUserId} style={{ padding: "10px" }}>
        New User ID
      </button>

      <h1>Application Posts</h1>

      <Posts user={user} addPost={addPost}></Posts>
    </>
  );
};

export default Home;
