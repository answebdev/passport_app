import React from 'react';
import { posts } from '../data';

const post = posts[2];

const Post = () => {
  return (
    <div className='post'>
      <img className='postImg' src={post.img} alt='' />
      <h1 className='postTitle'>{post.title}</h1>
      <p className='postDesc'>{post.desc}</p>
      <p className='postLongDesc'>{post.longDesc}</p>
    </div>
  );
};

export default Post;
