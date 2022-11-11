import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostsService from "../services/PostsService";
function SinglePost() {
  const [post, setPost] = useState("");
  const { id } = useParams();

  const getSinglePost = async () => {
    const data = await PostsService.get(id);
    setPost(data);
    console.log(data);
  }
  useEffect(() => {
    getSinglePost();
  }, []);
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.text}</p>
      <small>Post dreated ad: {post.createdAt}</small>
    </div>
  );
}

export default SinglePost;