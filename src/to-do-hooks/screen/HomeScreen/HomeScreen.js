import React, { useState, useEffect } from "react";
import Button from "../../components/Buttons/Button";
import ListItem from "../../components/ListItem/ListItem";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import "./Styles.css";

const HomeScreen = () => {
  const [state, setState] = useState("");
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const [error, setError] = useState("");
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/"
      );
      setList(response.data.splice(0, 10));
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
          {state.error ? <span>{error}</span> : null}
        </div>
        <Button
          text="Add"
          handleClick={() => {
            if (value) {
              const newArr = [
                {
                  title: value,
                  id: uuidv4(),
                },
                ...list,
              ];
              setError("");
              setList(newArr);
              setValue("");
            } else {
              setError("plase submit a task");
            }
          }}
        />
      </section>
      <section className="item-section">
        {list?.length ? (
          list.map((item) => (
            <ListItem
              task={item.title}
              key={item.id}
              handleDelete={() => {
                const filterItem = list.filter(
                  (filterItem) => filterItem.id !== item.id
                );
                setList(filterItem);
              }}
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
