export const Task_SUCCESS = "Task_SUCCESS";
export const ADD_TASK_SUCCESS = "ADD_TASK_SUCCESS";
export const DELETE_TASK_SUCCESS = "DELETE_TASK_SUCCESS ";

export const TaskOperation = (payload) => {
  return { type: "Task_SUCCESS", payload: payload };
};
export const AddTaskOperation = (payload) => {
  return { type: "ADD_Task_SUCCESS", payload: payload };
};

export const DeleteTaskOperation = (payload) => {
  return { type: "ADD_Task_SUCCESS", payload: payload };
};
