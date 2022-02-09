import React, { useState } from "react";
import "./Modal.css";

function Modal() {
  const [state, setState] = useState("none");

  const handleModalButton = () => {
    setState("flex");
  };

  const handleModalCloseButton = () => {
    setState("none");
  };

  return (
    <div className="viewport__modal">
      <div className="viewport__modal__title">Modal</div>
      <div className="viewport__modal__context">
        <button className="modal-button" onClick={handleModalButton}>
          Open Modal!
        </button>
      </div>
      <div className="modal-overlay" style={{ display: state }}>
        <div className="modal-overlay__content-wrapper">
          <button
            className="modal-overlay__content__button"
            onClick={handleModalCloseButton}
          >
            X
          </button>
          <h2 className="modal-overlay__content__text">HELLO</h2>
        </div>
      </div>
    </div>
  );
}

export default Modal;
