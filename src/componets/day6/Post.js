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
      <ul key={`${post?.id}`}>
        <li key={`${post?.id}_title`}>Post Title {post?.title}</li>
        <li key={`${post?.id}_body`}>Post {post?.body}</li>
        <li key={`${post?.id}_author`}>Author {author?.name}</li>
      </ul>
    </>
  );
};

export default Post;
