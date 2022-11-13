import React from 'react'
import "../styles/AddPost.css"

const NewPostForm = ({
    formik
}) => {
    console.log(formik.touched);
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