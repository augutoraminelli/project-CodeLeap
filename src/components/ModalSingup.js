import React from "react";

//create modal component
export function ModalSingup({ showModal }) {
  return (
    <>
      <div className="modal-background">
        { showModal ? <h1> Modal </h1>  : null }
      </div>
    </>
  );
}