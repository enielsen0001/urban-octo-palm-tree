import React from "react";

import "./Modal.scss";
import Card from "../UI/Card";

const Modal = (props) => {
  const inputAck = () => {
    props.onSetOk(true);
  };

  if (props.isValid === true) {
    return null;
  } else {
    return (
      <div className="modal">
        <Card className="modal-content">
          <h2>Invalid Input</h2>
          <div class="modal__txt-wrap">
            <p>{props.errorName}</p>
            <p>{props.errorAge}</p>
            <button onClick={inputAck}>I acknowledge I am a loser</button>
          </div>
        </Card>
      </div>
    );
  }
};

export default Modal;
