import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import NewPostForm from '../components/NewPostForm'
import PostsService from '../services/PostsService'

const AddPost = () => {
    let history = useHistory();
    let { id } = useParams();
    const [newPost, setNewPost] = useState({
        title: "",
        text: "",
    })

    const postTitleHandler = (e) => {
        setNewPost({ ...newPost, title: e.target.value })
    }
    const postTextHandler = (e) => {
        setNewPost({ ...newPost, text: e.target.value })
    }

    const getPost = async () => {
        const data = await PostsService.get(id);
        setNewPost(data);
    }
    useEffect(() => {
        if (id) {
            getPost();
        }
    }, [id]); // Ako stavim bez provere vracao mi je gresku, ali se sva logika ipak izvrsavala to mi malo nije jasno

    const onSubnitHandler = async (e) => {
        e.preventDefault();
        if (!id) {
            await PostsService.add(newPost);
        } else {
            await PostsService.edit(id, newPost);
        }
        history.push("/posts")
    }

    const resetHandler = () => {
        setNewPost({
            title: "",
            text: "",
        })
    }

    return (
        <div>
            <NewPostForm
                newPost={newPost}
                onPostTitleHandler={postTitleHandler}
                onPostTextHandler={postTextHandler}
                onResetButton={resetHandler}
                onFormSubmit={onSubnitHandler} />
        </div>
    )
}

export default AddPost