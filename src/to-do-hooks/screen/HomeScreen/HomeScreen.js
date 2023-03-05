import React, { useState, useEffect } from "react";
import Button from "../../components/Buttons/Button";
import ListItem from "../../components/ListItem/ListItem";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import "./Styles.css";

const HomeScreen = ({ tasks, dispatch }) => {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const [error, setError] = useState("");
  
  const globalState = useSelector((state) => state);

  const handleAddTask = () => {
    if (value) {
      dispatch({ type: "ADD_TASK", payload: value });
      setValue("");
    }
  };

  const handleDeleteTask = (taskId) => {
    dispatch({ type: "DELETE_TASK", payload: taskId });
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/"
      );
      // setList(response.data.splice(0, 10));
      dispatch(setList(response.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="inner-container">
      <h1 className="page-title">To Do List APP</h1>
      <section className="input-section">
        {/*Controlled input */}
        <div className="input-box">
          <input
            className="add-task-input"
            type="text"
            placeholder="Enter a New Task"
            onChange={(event) => {
              setValue(event.target.value);
            }}
            value={value}
          />
          {error ? <span>{error}</span> : null}
        </div>
        <Button
          text="Add"
          // handleClick={() => {
          //   handleAddTask;
          //   // if (value) {
          //   //   const newArr = [
          //   //     {
          //   //       title: value,
          //   //       id: uuidv4(),
          //   //     },
          //   //     ...list,
          //   //   ];
          //   //   setError("");
          //   //   globalState.ListItemState(setList(newArr));
          //   //   setValue("");
          //   // } else {
          //   //   setError("plase submit a task");
          //   // }
          // }}
          onClick={handleAddTask}
        />
      </section>
      <section className="item-section">
        {list?.length ? (
          list.map((task) => (
            <ListItem
              // task={item.title}
              task={task}
              key={task.id}
              // handleDelete={() => {
              //   const filterItem = list.filter(
              //     (filterItem) => filterItem.id !== item.id
              //   );
              // setList(filterItem)
              // }}
              onDelete={handleDeleteTask}
            />
          ))
        ) : (
          <span>Loading...</span>
        )}
      </section>
    </div>
  );
};

export default HomeScreen;
