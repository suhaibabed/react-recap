export const ACTIONS = {
  ADDTASK: "ADD_TASK",
  DELETE_TASK: "delete_task",
};
export const reducer = (action, state) => {
  switch (action.type) {
    case ACTIONS.ADDTASK:
      return [...state, action.payload];

    case ACTIONS.DELETE_TASK: {
      const id = action.payload;
      const filteredState = state.filter((e) => e.id === id);
      return filteredState;
    }

    default:
      break;
  }
};
