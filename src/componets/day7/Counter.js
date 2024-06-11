import axios from "axios";
import { useEffect, useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(1);
  const [user, setUser] = useState({});
  const [originalUser, setOriginalUser] = useState({});

  const addOne = () => {
    setValue(value + 1);
  };

  const subOne = () => {
    setValue(value - 1);
  };

  useEffect(() => {
    const URL = `https://jsonplaceholder.typicode.com/users/${value}`;
    axios
      .get(URL)

      .then(({ data }) => {
        let name,
          email = "";

        if (value === 1) {
          name = "Prasad";
          email = "prasad@hotmail.com";
        } else if (value === 2) {
          name = "Joythi";
          email = "Joythi@hotmail.com";
        }

        const Modified = { ...data, name, email };

        setUser(Modified);
        setOriginalUser(data);
      });
  }, [value]);

  return (
    <>
      <button onClick={subOne}>-</button>
      <label>{value}</label>
      <button onClick={addOne}>+</button>

      <hr></hr>

      <li>Full Name : {user?.name}</li>

      <li>Email : {user?.email}</li>
      <li>My Website : {user?.website}</li>

      <li>Original Full Name : {originalUser?.name}</li>
      <li>Email : {originalUser?.email}</li>
      <li>My Website : {originalUser?.website}</li>
    </>
  );
};

export default Counter;
