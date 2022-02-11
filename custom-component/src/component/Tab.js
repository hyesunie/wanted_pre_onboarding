import React, { useState } from "react";
import "./Tab.css";

function Tab() {
  const [state, setState] = useState("init");

  const router = {
    init: () => <h2>Tab을 클릭해주세요!</h2>,
    tab1: () => <h2>Tab1</h2>,
    tab2: () => <h2>Tab2</h2>,
    tab3: () => <h2>Tab3</h2>,
  };

  const clickTabStyle = {
    "background-color": "rgb(155, 101, 0)",
    color: "white",
  };

  const handleTabClick = (e) => {
    const tab = e.target.id;
    setState(tab);
  };

  return (
    <div className="viewport__tab">
      <div className="viewport__tab__title">Tab</div>
      <div className="viewport__tab__content">
        <div className="tab__header-wrapper">
          <div
            className="tab-button"
            id="tab1"
            onClick={handleTabClick}
            style={state === "tab1" ? clickTabStyle : {}}
          >
            tab1
          </div>
          <div
            className="tab-button"
            id="tab2"
            onClick={handleTabClick}
            style={state === "tab2" ? clickTabStyle : {}}
          >
            tab2
          </div>
          <div
            className="tab-button"
            id="tab3"
            onClick={handleTabClick}
            style={state === "tab3" ? clickTabStyle : {}}
          >
            tab3
          </div>
        </div>
        <div className="tab__viewport">{router[state]()}</div>
      </div>
    </div>
  );
}

export default Tab;
