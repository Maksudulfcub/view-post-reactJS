import React from 'react';
import '../components/Post.css';

const Post = ({ post }) => {
    const { title, id, body } = post;
    return (
        <div className='post'>
            <h4>Title : {title}</h4>
            <p>ID :{id}</p>
            <p>Description : {body}</p>
        </div>
    );
};

export default Post;