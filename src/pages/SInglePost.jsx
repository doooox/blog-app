import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostsService from "../services/PostsService";
function SinglePost() {
  const [post, setPost] = useState('');
  const { id } = useParams();

  async function getSinglePost() {
    const data = await PostsService.get(id);
    setPost(data);
  }

  useEffect(() => { getSinglePost() }, []);

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.text}</p>
      <small>{post.createdAt}</small>
    </div>
  );
}

export default SinglePost;