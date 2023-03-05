import React from "react";
import "./Styles.css";
import Button from "../Buttons/Button";

const ListItem = (task, onDelete) => {
  return (
    <div className="list-item">
      <span className="task-title">{task.text}</span>
      <Button text="Delete" isPurple={true} onClick={() => onDelete(task.id)} />
    </div>
  );
};

export default ListItem;
