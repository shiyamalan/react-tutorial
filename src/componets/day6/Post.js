import axios from "axios";
import { useEffect, useState } from "react";

const Post = (props) => {
  const { post } = props;

  const [author, setAuthor] = useState({});

  const { userId } = post;

  const URL = `https://jsonplaceholder.typicode.com/users/${userId}`;

  useEffect(() => {
    axios.get(URL).then(({ data }) => setAuthor(data));
  }, [URL]);

  return (
    <>
      <ul>
        <li>Post Title {post?.title}</li>
        <li>Post {post?.body}</li>
        <li>Author {author?.name}</li>
      </ul>
    </>
  );
};

export default Post;
