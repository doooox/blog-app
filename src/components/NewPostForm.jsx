import React, { useState } from 'react'
import PostsService from '../services/PostsService'
import { useHistory } from 'react-router-dom'

const NewPostForm = () => {
    const [newPost, setNepPost] = useState({
        title: "",
        text: "",
        timestamp: new Date().toDateString()
    })
    let history = useHistory();

    const postTitleHandler = (e) => {
        setNepPost({ ...newPost, title: e.target.value })
    }
    const postTextHandler = (e) => {
        setNepPost({ ...newPost, text: e.target.value })
    }
    const onSubnitHandler = async (e) => {
        e.preventDefault();
        await PostsService.add(newPost);
        history.push("/posts")
    }

    return (
        <div>
            <h1>Add new post</h1>
            <form onSubmit={onSubnitHandler}>
                <label htmlFor="post-title">Enter post title</label>
                <input
                    type="text"
                    id="post-title"
                    value={newPost.title}
                    onChange={postTitleHandler}
                />
                <label htmlFor="post-text">Enter the text of a post</label>
                <textarea
                    id="post-text"
                    cols="30"
                    rows="10"
                    value={newPost.text}
                    onChange={postTextHandler}
                ></textarea>
                <input
                    type="hidden"
                    value={newPost.timestamp}
                    onChange={() => { }}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default NewPostForm