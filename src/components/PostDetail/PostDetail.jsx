import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const post =useLoaderData()
    const{id,title,useId,body}= post;
    const navigate = useNavigate()
    const handleGoBack =()=>{
        navigate(-1);
    }
    return (
        <div>
            <h3>Details about your post:{id}</h3>
            <h4>{title}</h4>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetail;