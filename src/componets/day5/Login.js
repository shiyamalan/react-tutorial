import { createContext, useEffect, useState } from "react";
import "./Login.css";
import { Navigate } from "react-router-dom";
import Home from "../day4/Home";
import axios, { AxiosHeaders } from "axios";
import Profile from "../day4/Profile";

export const UserContext = createContext();
const Login = () => {
  const [authenticated, setAuthenticate] = useState(false);

  const [user, setUser] = useState({});

  console.log("Rendering authenticated, user", authenticated, user);

  function signIn(event) {
    event.preventDefault();
    const URL = "https://jsonplaceholder.typicode.com/users/1";

    axios.get(URL).then((response) => {
      const { data } = response;
      setAuthenticate(true);
      setUser(data);
    });
  }

  const handleRememberMe = () => {};

  const renderLoginPage = () => {
    return (
      <>
        <form onSubmit={signIn} method="GET">
          <div className="imgcontainer">
            <img
              src={require("./img_avatar2.png")}
              alt="Avatar"
              className="avatar"
            />
          </div>

          <div className="container">
            <div>
              <label htmlFor="uname" className="labelClass">
                <b>Username</b>
              </label>
              <input
                type="text"
                placeholder="Enter Username"
                name="uname"
                required
              />
            </div>

            <div>
              <label htmlFor="psw" className="labelClass">
                <b>Password</b>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="psw"
                required
              />
            </div>
            <div>
              <button type="submit">Login</button>
              <button type="button" className="cancelbtn">
                Cancel
              </button>
            </div>

            <div>
              <label>
                <input
                  type="checkbox"
                  checked="checked"
                  name="remember"
                  onChange={handleRememberMe}
                />{" "}
                Remember me
              </label>
            </div>
            <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
              <span className="psw">
                <a href="/forgotpassword">Forgot password?</a>
              </span>
            </div>
          </div>
        </form>
      </>
    );
  };

  const renderHomePage = () => {
    return (
      <>
        <UserContext.Provider value={user}>
          <Home></Home>
        </UserContext.Provider>
      </>
    );
  };

  return (
    <>
      {!authenticated && renderLoginPage()}
      {authenticated && renderHomePage()}
    </>
  );
};

export default Login;
