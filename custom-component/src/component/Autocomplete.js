import React, { useState } from "react";
import "./Autocomplete.css";

function Autocomplete() {
  const [state, setState] = useState({
    list: ["toggle", "modal", "tab", "tag", "click", "edit", "auto"],
    currentWord: "",
    selectInputText: "",
    toggleSelect: false,
    blur: false,
  });

  const blurStyle = {
    display: "none",
  };

  const findList = (currentWord) => {
    if (currentWord === "") return [];

    return state.list.filter((word) => {
      const regexp = new RegExp(`${currentWord}`, "g");
      if (regexp.test(word)) return true;
      return false;
    });
  };

  const createAutoList = (autoList) => {
    if (autoList.length === 0) return "";

    return autoList.map((word) => {
      return (
        <li key={word} onClick={handleAutoListClick}>
          {word}
        </li>
      );
    });
  };

  const handleChangeText = (e) => {
    const value = e.target.value;

    const newState = { ...state };
    newState.currentWord = value;
    newState.toggleSelect = false;

    setState({ ...newState });
  };

  const handleKeyUp = (e) => {
    if (e.key !== "Enter") return;

    const value = e.target.value;

    const existValue = state.list.includes(value);
    if (existValue) return;

    const newState = { ...state };
    newState.list.push(value);

    setState({ ...newState });
  };

  const handleAutoListClick = (e) => {
    const inputText = e.target.innerText;

    const newState = { ...state };
    newState.selectInputText = inputText;
    newState.toggleSelect = true;

    setState(newState);
  };

  const handleEditFocus = (e) => {
    const newState = { ...state };
    newState.blur = false;

    setState(newState);
  };

  const handleEditBlur = () => {
    const newState = { ...state };
    newState.blur = true;

    setState(newState);
  };

  return (
    <div className="viewport__auto-complete">
      <div className="viewport__auto-complete__title">Autocomplete</div>
      <div className="viewport__auto-complete__content">
        <div className="auto-complete-wrapper">
          <input
            type={"text"}
            onChange={handleChangeText}
            onKeyUp={handleKeyUp}
            onFocus={handleEditFocus}
            onBlur={handleEditBlur}
            value={
              state.toggleSelect ? state.selectInputText : state.currentWord
            }
          ></input>
          <ul style={state.blur ? blurStyle : {}}>
            {createAutoList(findList(state.currentWord))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Autocomplete;
