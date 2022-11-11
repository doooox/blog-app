import React from 'react'

const NewPostForm = ({
    newPost,
    onPostTitleHandler,
    onPostTextHandler,
    onResetButton,
    onFormSubmit,
}) => {
   
    return (
        <div>
            <h1>Add new post</h1>
            <form onSubmit={onFormSubmit}>
                <label htmlFor="post-title">Enter post title</label>
                <input
                    type="text"
                    id="post-title"
                    required
                    minLength={2}
                    value={newPost.title}
                    onChange={onPostTitleHandler}
                />
                <label htmlFor="post-text">Enter the text of a post</label>
                <textarea
                    id="post-text"
                    cols="30"
                    rows="10"
                    required
                    maxLength={300}
                    value={newPost.text}
                    onChange={onPostTextHandler}
                ></textarea>
                <input
                    type="hidden"
                    value={newPost.timestamp}
                    onChange={() => { }}
                /> 
                <button type="submit">Submit</button>
                <button type='button' onClick={onResetButton}>Reset</button>
            </form>
        </div>
    )
}

export default NewPostForm