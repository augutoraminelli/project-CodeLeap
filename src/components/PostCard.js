import React from 'react'
import { useDispatch } from 'react-redux';
import { removePost } from '../actions';
import '../styles/postCard.css'

function PostCard({ post, i }) {

  const { title, content, createdAt } = post;

  const dispatch = useDispatch();

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

  const deletePost = () => {
    dispatch(removePost(post.id));
  }

    return (
      <div className='ctn-postcard'>
        <div className='ctn-header-postcard'>
          <h2 className='header-title'>{ title }</h2>
          <input
            alt='delete-btn'
            className='delete-btn'
            type='image'
            src='https://img.icons8.com/ios-filled/50/000000/delete-sign.png'
            onClick={ deletePost }
          />
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
