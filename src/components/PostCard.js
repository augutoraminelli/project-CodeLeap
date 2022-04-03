import React from 'react'

function PostCard({ post, i }) {

  const { title, content } = post;
  console.log(post);
    return (
      <div>
        <h2 className='header-postcard'>{ title }</h2>
        <p className='content card'>{ content }</p>
      </div>
    )
  }

export default PostCard; 
