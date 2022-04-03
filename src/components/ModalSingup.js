import React, { useState } from "react";
// import { useNavigate } from 'react-router-dom';
import INITIAL_LOCAL_STORAGE from "../data";
import '../styles/modal.css';

//create modal component
export function ModalSignup({ showModal }) {
  // const navigate = useNavigate();

  const [username, setUsername] = useState('');

  const handleClick = async (e) => { 
    e.preventDefault();
  
    INITIAL_LOCAL_STORAGE.forEach(({ key, value }) => (key === 'username'
      ? localStorage.setItem('username', JSON.stringify({ username }))
      : localStorage.setItem(key, JSON.stringify(value))));

    // navigate('/main-page');
  }

  const validUsernameField = () => {
    const MIN_USERNMAE = 1;
    return username.length >= MIN_USERNMAE;
  }

  return (
      <div>
        { showModal ? (
          <div className="modal-signup-background">
            <form className="modal-signup" onSubmit={ handleClick }>
              <h2 className="modal-signup-title"> Welcome to CodeLeap network! </h2>
              <h3 className="modal-signup-username"> Please enter your username </h3>
              <input
                name="username"
                className="modal-signup-input"
                type="text"
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
                value = { username }
              />
              <button 
                className="modal-signup-btn"
                disabled={ !validUsernameField() }
                type="submit"
                >
                ENTER 
              </button>
            </form>
          </div>
        ) : null }
      </div>
  );
}