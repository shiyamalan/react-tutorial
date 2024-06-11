import { memo, useContext } from "react";
import { UserContext } from "../day5/Login";

const Profile = (props) => {
  const user = useContext(UserContext);
  console.log("User inside profile page", user);

  const name = user ? user.name : "";
  return (
    <>
      <p>Full Name {name}</p>
      <p>Email {user?.email}</p>
      <p>User Name {user?.username}</p>
      <p>phone {user?.phone}</p>
    </>
  );
};

export default memo(Profile);
