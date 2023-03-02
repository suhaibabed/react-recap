import React from "react";
import "./Styles.css";
import Button from "../Buttons/Button";

const ListItem = (props) => {
  return (
    <div className="list-item">
      <span className="task-title">{props.task}</span>
      <Button text="Delete" isPurple={true} handleClick={props.handleDelete} />
    </div>
  );
};

export default ListItem;
