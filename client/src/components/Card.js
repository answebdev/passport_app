import React from 'react';

const Card = ({ post }) => {
  return (
    <div>
      <span className='title'>{post.title}</span>
      <img className='img' src={post.img} alt='' />
      <p className='desc'>{[post.desc]}</p>
      <button className='cardButton'>Read More</button>
    </div>
  );
};

export default Card;
