import React, { useState } from "react";
import "./ClickToEdit.css";

function ClickToEdit() {
  const [state, setState] = useState({
    name: "",
    age: "",
    nameClick: false,
    ageClick: false,
  });

  const focusStyle = {
    fontSize: "2em",
  };

  const handleEditFocus = (e) => {
    const newState = { ...state };
    const key = e.target.id === "name" ? "nameClick" : "ageClick";
    newState[key] = true;

    setState({ ...newState });
  };

  const handleEditBlur = (e) => {
    const newState = { ...state };
    const key = e.target.id === "name" ? "nameClick" : "ageClick";
    newState[key] = false;

    setState({ ...newState });
  };

  const handleEditChange = (e) => {
    const newValue = e.target.value;
    const editkey = e.target.id === "name" ? "name" : "age";

    const newState = { ...state };
    newState[editkey] = newValue;

    setState({ ...newState });
  };

  return (
    <div className="viewport__click-to-edit">
      <div className="viewport__click-to-edit__title">ClickToEdit</div>
      <div className="viewport__click-to-edit__content">
        <div className="name-wrapper" style={state.nameClick ? focusStyle : {}}>
          <label htmlFor="name">이름</label>
          <input
            type={"text"}
            id="name"
            name="name"
            onChange={handleEditChange}
            onFocus={handleEditFocus}
            onBlur={handleEditBlur}
          ></input>
        </div>
        <div className={"age-wrapper"} style={state.ageClick ? focusStyle : {}}>
          <label htmlFor="age">나이</label>
          <input
            type={"text"}
            id="age"
            name="age"
            onChange={handleEditChange}
            onFocus={handleEditFocus}
            onBlur={handleEditBlur}
          ></input>
        </div>
        <h2>
          이름: {state.name}, 나이: {state.age}
        </h2>
      </div>
    </div>
  );
}

export default ClickToEdit;
