import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
   const friend = useLoaderData();
//    console.log(friend)
    return (
        <div>
            <h1>This is friend detaitls</h1>
           <h1>{friend.name}</h1>
        </div>
    );
};

export default FriendDetail;