import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import PostsService from '../services/PostsService';

const AppPosts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  const getAllPosts = async () => {
    setIsLoading(true)
    const posts = await PostsService.getAll();
    setPosts(posts)
    setIsLoading(false)
    console.log(posts);
  }

  const deletePostHandler = async (id) => {
    const deletePost = await PostsService.delete(id)
    if (deletePost) {
      setPosts([...posts.filter((post) => id !== post.id)])
    }
  }

  useEffect(() => { getAllPosts() }, []);

  return (
    <div>
      <h1>Posts</h1>
      { (!isLoading) && posts.map((post) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          {(post.comments.length) && (
            <small>This post has: {post.comments.length} comments</small>)}
          <div>
            <Link to={`/posts/${post.id}`}>
              <button>View Post</button>
            </Link>
          </div>
          <div>
            <Link to={`/edit/${post.id}`}>
              <button> Edit Post </button>
            </Link>
          </div>
          <div>
            <button type='button' onClick={() => deletePostHandler(post.id)}> Delete Post </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AppPosts