import React, { useState } from "react";
import "./popup.css";

const Popup = ({ closePopup }) => {
  return (
    <div className="popup-container">
      <div className="popup-internal-container">
        <div className="modal-background">
          <div className="modal-container">
            <div className="modal-first">
            <span id="cancel-button" onClick={() => closePopup(false)}>
              X
            </span>
            <div className="title">
              <p>
                Hey coder, sign up to never miss an update when we upload a new
                course or when we announce giveaways!
              </p>
            </div>
            </div>
            <div className="email">
              <input type="email" placeholder="Email"/>
              <span onClick={() => closePopup(false)}>Submit</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
