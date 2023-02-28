import react, { useState, useReducer, useCallback } from "react";
// import react, { useState } from "react";
// import AddTask from "./reducer-refresh/AddTask";
// import TaskList from "./reducer-refresh/TaskList";
import "./index.css";
import Todo from "./todo-app/components/Todo";
import Form from "./todo-app/components/Form";
import FilterButton from "./todo-app/components/FilterButton";
import { nanoid } from "nanoid";

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};
const FILTER_NAMES = Object.keys(FILTER_MAP);

const useAppDispatch = (dispatch, type) => (payload) =>
  useCallback(() => dispatch)({ type, payload }, []);

function App(props) {
  // const [tasks, setTasks] = useState(props.tasks);
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  const addTaskNew = useAppDispatch(dispatch, ACTIONS.ADD_TAS);
  const deleteTASK = useAppDispatch(dispatch, ACTION.DELETE);

  const [filter, setFilter] = useState("All");

  function toggleTaskCompleted(id) {
    // const updatedTasks = tasks.map((task) => {
    //   if (id === task.id) {
    //     return { ...task, completed: !true.completed };
    //   }
    //   return task;
    // });
    // setTasks(updatedTasks);
    dispatch({
      type: "changed",
      id: id,
    });
  }

  const deleteTask = useCallback((id) =>
    dispatch({ type: "deleteTask", payload: id }, [])
  );

  function editTask(id, newName) {
    // const editedTaskList = tasks.map((task) => {
    //   if (id === task.id) {
    //     return { ...task, name: newName };
    //   }
    //   return task;
    // });
    // setTasks(editedTaskList);
    dispatch({
      type: "editTask",
      id: id,
      name: newName,
    });
  }

  const taskList = tasks
    .filter(FILTER_MAP[filter])
    .map((task) => (
      <Todo
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    ));

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  return (
    <>
      <div className="todoapp stack-large">
        <h1>TodoMatic</h1>

        <Form addTask={addTask} />
        <div className="filters btn-group stack-exception">{filterList}</div>
        <h2 id="list-heading">{headingText}</h2>
        <ul
          role="list"
          className="todo-list stack-large stack-exception"
          aria-labelledby="list-heading"
        >
          {taskList}
        </ul>
      </div>
    </>
  );
}

function tasksReducer(tasks, action) {
  if (action.type === "addTask") {
    return [
      ...tasks,
      {
        id: `todo-${nanoid()}`,
        name: action.name,
        completed: false,
      },
    ];
  } else if (action.type === "changed") {
    const updatedTasks = tasks.map((task) => {
      if (action.id === task.id) {
        return { ...task, completed: !true.completed };
      }
      return task;
    });
  } else if (action.type === "deleted") {
    const remainingTasks = tasks.filter((task, id) => id !== task.id);
  } else if (action.type === "editTask") {
    const editedTaskList = tasks.map((task) => {
      if (action.id === task.id) {
        return { ...task, name: action.newName };
      }
      return task;
    });
  } else {
    throw Error("Unknown action: " + action.type);
  }
}

const initialTasks = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false },
];

export default App;

/* 3 step to migrate from useState to useReducer 

1- move from setting state to dispatch action
2- write a reducer function
3- use a reducer in your components 

*/

// export default function TaskApp() {
//   // const [tasks, setTasks] = useState(initialTasks);
//   const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

//   const handleAddTask = (text) => {
//     // setTasks([
//     //   ...tasks,
//     //   {
//     //     id: nextId++,
//     //     text: text,
//     //     done: false,
//     //   },
//     // ]);
//     dispatch({
//       type: "added",
//       id: "nextId++",
//       text: "text",
//     });
//   };

//   const handleChangeTask = (task) => {
//     // setTasks(
//     //   tasks.map((t) => {
//     //     if (t.id === task.id) {
//     //       return task;
//     //     } else {
//     //       return t;
//     //     }
//     //   })
//     // );
//     dispatch({
//       type: "changed",
//       task: task,
//     });
//   };

//   const handleDeleteTask = (taskId) => {
//     // setTasks(tasks.filter((t) => t.id !== taskId));
//     dispatch({
//       type: "deleted",
//       id: taskId,
//     });
//   };

//   return (
//     <>
//       <h1>Prague itinerary</h1>
//       <AddTask onAddTask={handleAddTask} />
//       <TaskList
//         tasks={tasks}
//         onChangeTask={handleChangeTask}
//         onDeleteTask={handleDeleteTask}
//       />
//     </>
//   );
// }

// function tasksReducer(tasks, action) {
//   //return next state for react to  set
//   if (action.type === "added") {
//     return [
//       ...tasks,
//       {
//         id: action.id,
//         text: action.text,
//         done: false,
//       },
//     ];
//   } else if (action.type === "changed") {
//     return tasks.map((t) => {
//       if (t.id === action.id) {
//         return action.task;
//       } else {
//         return t;
//       }
//     });
//   } else if (action.type === "deleted") {
//     return tasks.filter((t) => t.id !== action.id);
//   } else {
//     throw Error("unknown action :" + action.type);
//   }
// }

// let nextId = 3;
// const initialTasks = [
//   { id: 0, text: "Visit Kafka Museum", done: true },
//   { id: 1, text: "Watch a puppet show", done: false },
//   { id: 2, text: "Lennon Wall pic", done: false },
// ];

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState } from "react";
// import Welcome from "./components/Welcome";
// import Guset from "./components/Guset";

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   // if (isLoggedIn) {
//   //   element = <h1>I'm isLoggedIn</h1>;
//   // } else {
//   //   element = <h1>I'm not loggedIn</h1>;
//   // }

//   return (
//     <div className="App">
//       <button onClick={() => setIsLoggedIn(true)}>login</button>
//       {isLoggedIn ? <Welcome name="ahmed" /> : <Guset />}
//     </div>
//   );
// };

// export default App;
