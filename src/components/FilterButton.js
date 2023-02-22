import React from "react";

const FilterButton = (props) => {
  return (
    <div>
      <button
        type="button"
        className="btn btn-toggle-btn"
        aria-pressed={props.isPressed}
        onClick={() => props.setFilter(props.name)}
      >
        <span className="visually-hidden">Show</span>
        <span>{props.name}</span>
        <span className="visually-hidden"> tasks</span>
      </button>
    </div>
  );
};

export default FilterButton;
