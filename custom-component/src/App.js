import React, { useState } from "react";
import "./App.css";
import Toggle from "./component/Toggle";
import Modal from "./component/Modal";
import Tab from "./component/Tab";

function App() {
  const [state, setState] = useState("init");

  const router = {
    init: () => {
      return <h2> 위의 버튼을 눌러주세요. </h2>;
    },
    toggle: () => {
      return <Toggle></Toggle>;
    },
    modal: () => {
      return <Modal></Modal>;
    },
    tab: () => {
      return <Tab></Tab>;
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
          <button
            onClick={(e) => {
              handleClick(e);
            }}
            id="modal"
          >
            Modal
          </button>
          <button
            onClick={(e) => {
              handleClick(e);
            }}
            id="tab"
          >
            Tab
          </button>
        </div>
        <div className="viewport-wrapper">{router[state]()}</div>
      </main>
    </div>
  );
}

export default App;
