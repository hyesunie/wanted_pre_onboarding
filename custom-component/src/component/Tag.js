import React, { useState } from "react";
import "./Tag.css";

function Tag() {
  const [state, setState] = useState({ tags: [] });

  const handleKeyUp = (e) => {
    if (e.key !== "Enter") return;
    state.tags.push(e.target.value);
    setState({ tags: [...state.tags] });
    e.target.value = "";
  };

  const handleDeleteTag = (e) => {
    const deleteTagId = e.target.parentElement.id;
    const newState = state.tags.filter((tag) => tag !== deleteTagId);
    setState({ tags: [...newState] });
  };

  return (
    <div className="viewport__tag">
      <div className="viewport__tag__title">Tag</div>
      <div className="viewport__tag__content">
        <div className="tag-wrapper">
          {state.tags.map((tag) => {
            return (
              <span key={tag} id={tag}>
                {tag}
                <button onClick={handleDeleteTag}>x</button>
              </span>
            );
          })}
          <input
            type={"text"}
            placeholder="Press enter to add tags"
            onKeyUp={handleKeyUp}
          ></input>
        </div>
      </div>
    </div>
  );
}

export default Tag;
