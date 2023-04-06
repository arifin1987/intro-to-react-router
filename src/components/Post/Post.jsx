import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css'

const Post = ({post}) => {
    const{body,title,id}= post;
    const navigate = useNavigate()

    const handleNavigation = ()=>{
        navigate(`/post/${id}`);

    }
    return (
        <div className='post'>
            <h2>{title}</h2>
            <p>{body}</p>
            <Link to={`/post/${id}`}> <button>Show post details</button></Link>
           
           <button onClick={handleNavigation}>With Button Handler</button>
        </div>
    );
};

export default Post;