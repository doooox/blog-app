import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import NewPostForm from '../components/NewPostForm'
import PostsService from '../services/PostsService'

const AddPost = () => {
    let history = useHistory();
    let { id } = useParams();
    const isEditMode = !!id
    console.log({id})
    const [getPosts, setGetPosts] = useState()
    const getPost = async () => {
        const data = await PostsService.get(id);
        setGetPosts(data);
    }
    const handleSubmit = async (values) => {
        if (!id) {
            await PostsService.add(values);
        } else {
            await PostsService.edit(id, values);
        }
        history.push("/posts")
    }
    useEffect(() => {
        if (id) {
            getPost();
        }
    }, [id]);

    return (
        <div>
            <NewPostForm
                    data={getPosts}
                    isEditMode={isEditMode}
                    onSubmit={handleSubmit}
                />
        </div>
    )
}

export default AddPost