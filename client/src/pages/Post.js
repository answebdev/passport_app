import React from 'react';
import { useLocation } from 'react-router-dom';
import { posts } from '../data';

const Post = () => {
  const location = useLocation();
  const path = location.pathname.split('/')[2];

  const post = posts.find((p) => p.id.toString() === path);

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
