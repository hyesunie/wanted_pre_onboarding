import React, { useState } from "react";
import "./Toggle.css";

function Toggle(props) {
  const [state, setState] = useState(false);
  const onStyleOverlay = {
    transform: "translate3d(100%,0,0)",
  };
  const offStyleOverlay = {
    transform: "translate3d(0,0,0)",
  };
  const onStyleButton = {
    transform: "translate3d(198%,0,0)",
  };
  const offStyleButton = {
    transform: "translate3d(0,0,0)",
  };

  const handleToggleButton = () => {
    const newState = state ? false : true;
    setState(newState);
  };

  return (
    <div className="viewport__toggle">
      <div className="viewport__toggle__title">Toggle</div>
      <div className="viewport__toggle__context">
        <div className="viewport__toggle__button-wrapper">
          <div
            className="toggle-overlay"
            style={state ? onStyleOverlay : offStyleOverlay}
          ></div>
          <div
            className="toggle-button"
            onClick={() => {
              handleToggleButton();
            }}
            style={state ? onStyleButton : offStyleButton}
          ></div>
        </div>
        <h2>Toggle Switch {state ? "ON" : "OFF"}</h2>
      </div>
    </div>
  );
}

export default Toggle;
