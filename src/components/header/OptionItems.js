import React from "react";

export default function OptionItems(props) {
  const handleClick = (name, operation) => {
    props.setcount((prevcount) => ({
      ...prevcount,
      [name]: operation === "i" ? props.count[name] + 1 : props.count[name] - 1,
    }));
  };
  return (
    <div className="option-items">
      <span className="option-text">{props.text}</span>
      <div className="option-counter">
        <button
          className="option-button"
          disabled={
            props.text === "Adult" || props.text === "Room"
              ? props.count[props.text] <= 1
              : props.count[props.text] <= 0
          }
          onClick={() => handleClick(props.text, "d")}
        >
          -
        </button>
        <span className="option-count">{props.count[props.text]}</span>
        <button
          className="option-button"
          onClick={() => handleClick(props.text, "i")}
        >
          +
        </button>
      </div>
    </div>
  );
}
