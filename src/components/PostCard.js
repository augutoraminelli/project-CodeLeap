import React from 'react'
import '../styles/postCard.css'

function PostCard({ post, i }) {

  const { title, content, createdAt } = post;

  const username = JSON.parse(localStorage.getItem('username'));

  const calculateTime = (time) => {
    const currentTime = new Date();
    const postTime = new Date(time);
    const diffTime = Math.abs(currentTime - postTime);
    const diffMinutes = Math.floor(diffTime / (60 * 1000));
     if (!diffMinutes) {
      return `${ diffMinutes } minutes ago`;
    }
  }

    return (
      <div className='ctn-postcard'>
        <div className='ctn-header-postcard'>
          <h2 className='header-title'>{ title }</h2>
        </div>
        <div className='ctn-content-card'>
          <span>{ username }</span>
          <span>{ calculateTime(createdAt) }</span>
           <p className='content-card'>{ content }</p>
        </div>
      </div>
    )
  }

export default PostCard; 
