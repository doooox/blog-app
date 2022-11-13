import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import NewPostForm from '../components/NewPostForm'
import PostsService from '../services/PostsService'
import { useFormik } from "formik"
import * as Yup from 'yup'

const AddPost = () => {
    let history = useHistory();
    let { id } = useParams();
    const [getPosts, setGetPosts] = useState()

    const formik = useFormik({
        initialValues: {
            title: "",
            text: ""
        }, validationSchema: Yup.object({
            title: Yup.string().min(2, "The title must contain more than 2 characters").required("The title is required"),
            text: Yup.string().max(300,"The text of the post must contain less than 300 characters"). required("The text of the post is required")
        }),
        onSubmit: async (values) => {
            console.log(values);
            if (!id) {
                await PostsService.add(formik.values);
            } else {
                await PostsService.edit(id, formik.values);
            }
            history.push("/posts")
        }
    })
    console.log(formik.errors);
    const getPost = async () => {
        const data = await PostsService.get(id);
        setGetPosts(data);
    }
    useEffect(() => {
        if (id) {
            getPost();
        }
    }, [id]);

    return (
        <div>
            <NewPostForm
                formik={formik}
            />
        </div>
    )
}

export default AddPost