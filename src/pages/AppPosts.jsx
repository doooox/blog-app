import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import PostsService from '../services/PostsService';

const AppPosts = () => {
  const { id } = useParams;
  const [posts, setPosts] = useState([]);
  const [postId, setPostId] = useState([])

  const getAllPosts = async () => {
    const posts = await PostsService.getAll();
    setPosts(posts)
  }

  useEffect(() => { getAllPosts() }, []);

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.text}</p>
          <div>  <Link to={`/posts/${post.id}`}>
            View Post
          </Link></div>

        </div>
      ))}
    </div>
  )
}

export default AppPosts