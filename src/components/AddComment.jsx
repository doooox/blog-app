import React from 'react'
import "../styles/AddComment.css"
const AddComment = ({
    getCommentText,
    onSubmitComment,
    comment
}) => {
    return (
        <div >
            <h2>Add Comment</h2>
            <form onSubmit={onSubmitComment} className='new-comment-wrapper'>
                <label htmlFor="comment-text">Enter Comment</label>
                <textarea
                    id="comment-text"
                    cols="30"
                    rows="10"
                    value={comment.text}
                    onChange={getCommentText}
                >
                </textarea>
                <button type="submit" className='comment-btn'>Submit</button>
            </form>
        </div>
    )
}

export default AddComment