import React from 'react'
import '../styles/postCard.css'

function PostCard({ post, i }) {

  const { title, content } = post;
  console.log(post);
    return (
      <div className='ctn-postcard'>
        <div className='ctn-header-postcard'>
          <h2 className='header-title'>{ title }</h2>
        </div>
        <div className='ctn-content-card'>
           <p className='content-card'>{ content }</p>
        </div>
      </div>
    )
  }

export default PostCard; 
