import React from 'react'

const SinglePostComponent = ({ title, text, createdAt }) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{text}</p>
            <small>Post was created at: {createdAt}</small>
        </div>
    )
}

export default SinglePostComponent