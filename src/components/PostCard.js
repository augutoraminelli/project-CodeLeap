import React from 'react'
import '../styles/postCard.css'

function PostCard({ post, i }) {

  const { title, content } = post;
  console.log(post);
    return (
      <div className='ctn-postcard'>
        <h2 className='header-postcard'>{ title }</h2>
        <p className='content card'>{ content }</p>
      </div>
    )
  }

export default PostCard; 
