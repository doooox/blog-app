import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddComment from "../components/AddComment";
import PostsService from "../services/PostsService";
import useFormattedDate from "../hooks/useFormattedDate";

function SinglePost() {
  const [post, setPost] = useState("");
  const [newComment, setNewComment] = useState({
    text: "",
  });
  const [date, setDate] = useState("")
  const { id } = useParams();
  
  const getSinglePost = async () => {
    const data = await PostsService.get(id);
    setPost(data);
    setDate(data.createdAt);
    console.log(typeof(date));
  }

  useEffect(() => {
    getSinglePost();
  }, []);
  const fromattedDate = useFormattedDate(date);
  const commentTextHandler = (e) => {
    setNewComment({ text: e.target.value })
  }
  const submitCommentHandler = async (e) => {
    e.preventDefault();
    const comment = await PostsService.addComment(newComment, id);
    getSinglePost()
    return setNewComment({...newComment, comment})
  }
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.text}</p>
      <small>Post updated ad: {fromattedDate} </small>
      <div>
        <h4>Comments:</h4>
        {post.comments && post.comments.map((comment) => (
          <div key={comment.id}>
            <p>{comment.text}</p>
          </div>
        ))}
        <AddComment comment={newComment} getCommentText={commentTextHandler} onSubmitComment={submitCommentHandler} />
      </div>
    </div>
  );
}

export default SinglePost;