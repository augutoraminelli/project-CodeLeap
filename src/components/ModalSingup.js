import React from "react";
import '../styles/modal.css';

//create modal component
export function ModalSignup({ showModal }) {
  return (
      <div>
        { showModal ? (
          <div className="modal-signup-background">
            <div className="modal-signup">
              <h2 className="modal-signup-title"> Welcome to CodeLeap network! </h2>
              <h3 className="modal-signup-username"> Please enter your username </h3>
              <input className="modal-signup-input" type="text" placeholder="username" />
              <button className="modal-signup-button"> ENTER </button>
            </div>
          </div>
        ) : null }
      </div>
  );
}