import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../actions';
import '../styles/newPost.css';

function NewPost() {

  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const addNewPost = (e) => {
    e.preventDefault();
    dispatch(addPost(
      { title, content, createdAt: new Date() }
    ));
    setTitle('');
    setContent('');
  }

  const validTitleField = () => {
    const MIN_TITLE = 1;
    return title.length >= MIN_TITLE;
  }

  const validContentField = () => {
    const MIN_USERNMAE = 1;
    return content.length >= MIN_USERNMAE;
  }

  return (
    <div className="ctn-newpost">
      <h2 className='ctn-title'>What’s on your mind?</h2>
      <form className="newpost-form" onSubmit={ addNewPost }>
        <h3 className="newpost-title">Title</h3>
        <input
          name="newpost-title-input"
          className="newpost-title-input"
          type="text"
          placeholder="Hello world"
          onChange={(e) => setTitle(e.target.value)}
          value = { title }
        />
        <h3 className="newpost-content">Content</h3>
        <input
          name="newpost-content-input"
          className="newpost-content-input"
          type="textarea"
          placeholder="Content here"
          onChange={(e) => setContent(e.target.value)}
          value = { content }
        />
        <button 
          className="newpost-btn"
          disabled={ !validTitleField() || !validContentField() }
          type="submit"
          >
          CREATE 
        </button>
      </form>
    </div>
  )
}

export default NewPost;