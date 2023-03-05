import { v4 as uuidv4 } from "uuid";

// Define the initial state of the store
const initialState = {
  tasks: [],
};

// Define the reducer function to handle state updates
function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, { id: uuidv4(), text: action.payload }],
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    default:
      return state;
  }
}

export default reducer;
