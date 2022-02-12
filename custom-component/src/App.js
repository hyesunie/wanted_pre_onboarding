import React, { useState } from "react";
import "./App.css";
import Toggle from "./component/Toggle";
import Modal from "./component/Modal";
import Tab from "./component/Tab";
import Tag from "./component/Tag";
import Autocomplete from "./component/Autocomplete";
import ClickToEdit from "./component/ClickToEdit";

import imageLogo from "./image/LOGO.png";

function App() {
  const [state, setState] = useState("init");

  const router = {
    init: () => {
      return <h1> 위의 버튼을 눌러주세요. </h1>;
    },
    toggle: () => <Toggle></Toggle>,
    modal: () => <Modal></Modal>,
    tab: () => <Tab></Tab>,
    tag: () => <Tag></Tag>,
    autocomplete: () => <Autocomplete></Autocomplete>,
    clickToEdit: () => <ClickToEdit></ClickToEdit>,
  };

  const clickButtonStyle = {
    backgroundColor: "#fbe158",
    color: "rgb(70, 64, 54)",
  };

  const handleClick = (e) => {
    const key = e.target.id;
    setState(key);
  };

  return (
    <div className="app">
      <header>
        <img src={imageLogo} alt="logo" />
      </header>
      <main>
        <div className="button-wrapper">
          <button
            onClick={(e) => {
              handleClick(e);
            }}
            id="toggle"
            style={state === "toggle" ? clickButtonStyle : {}}
          >
            Toggle
          </button>
          <button
            onClick={(e) => {
              handleClick(e);
            }}
            id="modal"
            style={state === "modal" ? clickButtonStyle : {}}
          >
            Modal
          </button>
          <button
            onClick={(e) => {
              handleClick(e);
            }}
            id="tab"
            style={state === "tab" ? clickButtonStyle : {}}
          >
            Tab
          </button>
          <button
            onClick={(e) => {
              handleClick(e);
            }}
            id="tag"
            style={state === "tag" ? clickButtonStyle : {}}
          >
            Tag
          </button>
          <button
            onClick={(e) => {
              handleClick(e);
            }}
            id="autocomplete"
            style={state === "autocomplete" ? clickButtonStyle : {}}
          >
            Autocomplete
          </button>
          <button
            onClick={(e) => {
              handleClick(e);
            }}
            id="clickToEdit"
            style={state === "clickToEdit" ? clickButtonStyle : {}}
          >
            ClickToEdit
          </button>
        </div>
        <div className="viewport-wrapper">{router[state]()}</div>
      </main>
    </div>
  );
}

export default App;
