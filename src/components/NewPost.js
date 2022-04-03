import React from 'react';
import '../styles/newPost.css';

function NewPost() {
  return (
    <div className="ctn-newpost">
      <h2 className='ctn-title'>What’s on your mind?</h2>
      <form className="newpost-form">
        <h3 className="newpost-title">Title</h3>
        <input
          name="newpost-title-input"
          className="newpost-title-input"
          type="text"
          placeholder="Hello world"
          // onChange={(e) => setUsername(e.target.value)}
          // value = { title }
        />
        <h3 className="newpost-content">Content</h3>
        <input
          name="newpost-content-input"
          className="newpost-content-input"
          type="textarea"
          placeholder="Content here"
          // onChange={(e) => setUsername(e.target.value)}
          // value = { content }
        />
        <button 
          className="newpost-btn"
          // disabled={ !validUsernameField() }
          type="submit"
          >
          CREATE 
        </button>
      </form>
    </div>
  )
}

export default NewPost;