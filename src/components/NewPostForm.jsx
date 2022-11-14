import React, { useEffect } from 'react'
import "../styles/AddPost.css"
import { useFormik } from "formik"
import * as Yup from 'yup'


const NewPostForm = ({
    data,
    isEditMode,
    onSubmit,
}) => {
    const fields = ['title', 'text']

    const formik = useFormik({
        initialValues: {
            title: "",
            text: "",
        }, validationSchema: Yup.object({
            title: Yup.string().min(2, "The title must contain more than 2 characters").required("The title is required"),
            text: Yup.string().max(300, "The text of the post must contain less than 300 characters").required("The text of the post is required")
        }),
        onSubmit: onSubmit
    })
    console.log(data)
    console.log({isEditMode})
    useEffect(() => {
        if (isEditMode && data) {
            console.log({data})
            formik.setValues({ title: data.title, text: data.text })
        }
    }, [isEditMode, data])
    console.log(formik)
    console.log(formik.values.title)
    return (
        <div className='wrapper'>
            <h1>Add new post</h1>
            <form onSubmit={formik.handleSubmit} className="form">
                <label htmlFor="post-title">Enter post title</label>
                <input
                    type="text"
                    id="post-title"
                    name='title'
                    onBlur={formik.handleBlure}
                    value={formik.values.title}
                    onChange={formik.handleChange}
                />
                {formik.touched.title && formik.errors.title ? <p>{formik.errors.title}</p> : null}
                <label htmlFor="post-text">Enter the text of a post</label>
                <textarea
                    id="post-text"
                    name='text'
                    cols="30"
                    rows="10"
                    onBlur={formik.handleBlure}
                    value={formik.values.text}
                    onChange={formik.handleChange}
                ></textarea>
                {formik.touched.text && formik.errors.text ? <p>{formik.errors.text}</p> : null}
                <div className='btn'>
                    <button type="submit">Submit</button>
                    <button type='button' onClick={formik.handleReset}>Reset</button>
                </div>
            </form>
        </div>
    )
}

export default NewPostForm