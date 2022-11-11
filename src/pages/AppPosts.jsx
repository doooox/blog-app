import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { axiosObj } from '../services/AxiosService';
import PostsService from '../services/PostsService';

const AppPosts = () => {
  const { id } = useParams;
  const [posts, setPosts] = useState([]);

  const getAllPosts = async () => {
    const posts = await PostsService.getAll();
    setPosts(posts)
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
      {posts.map((post) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.text}</p>
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