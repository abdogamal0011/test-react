// src/components/PostList.js

import React from 'react';
import 'animate.css'

const PostList = ({ posts }) => {
  return (
    <div className='d-flex justify-content-between align-items-center p-2'>
      <h3>Posts</h3>
      {posts.map(post => (
        <div key={post.id} className="d-flex justify-content-between align-items-center p-2">
          <p>{post.id}</p>
          <div>
          <h4 className='animate__animated animate__shakeX'>{post.title}</h4>
          <p className='animate__animated animate__backInDown'>{post.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
