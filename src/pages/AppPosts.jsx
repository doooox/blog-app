import React, { useEffect, useState } from 'react'
import SinglePostComponent from '../components/SinglePostComponent';
import PostsService from '../services/PostsService';

const AppPosts = () => {
  const [posts, setPosts] = useState([]);

  const getAllPosts = async () => {
    const posts = await PostsService.getAll();
    setPosts(posts)
    console.log(posts);
  }
  useEffect(() => { getAllPosts() }, [])
  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <SinglePostComponent title={post.title} text={post.text} createdAt={post.createdAt} />
        </div>
      ))}
    </div>
  )
}

export default AppPosts