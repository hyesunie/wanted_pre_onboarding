import React, { useState } from "react";
import "./App.css";

function ToggleButton(props) {
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
      <div className="viewport__title">Toggle</div>
      <div className="viewport__context">
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

function App() {
  const [state, setState] = useState("init");

  const router = {
    init: () => {
      return <h2> 위의 버튼을 눌러주세요. </h2>;
    },
    toggle: () => {
      return <ToggleButton></ToggleButton>;
    },
  };

  const handleClick = (e) => {
    const key = e.target.id;
    setState(key);
  };

  return (
    <div className="app">
      <header>Hyesunie Project</header>
      <main>
        <div className="button-wrapper">
          <button
            onClick={(e) => {
              handleClick(e);
            }}
            id="toggle"
          >
            Toggle
          </button>
        </div>
        <div className="viewport-wrapper">{router[state]()}</div>
      </main>
    </div>
  );
}

export default App;
