import React, { useState } from "react";
import '../styles/modal.css';

//create modal component
export function ModalSignup({ showModal }) {

  const [username, setUsername] = useState('');

  const validUsernameField = () => {
    const MIN_USERNMAE_LENGTH = 1;
    return username.length >= MIN_USERNMAE_LENGTH;
  }

  return (
      <div>
        { showModal ? (
          <div className="modal-signup-background">
            <div className="modal-signup">
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
            </div>
          </div>
        ) : null }
      </div>
  );
}