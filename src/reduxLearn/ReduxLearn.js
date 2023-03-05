// import { useState } from "react";
/*
to understand Redux  there are 3 question for me :
1) what it is do ? 
2)what problem it help me to solve ? 
3)why to would me to use it ?


Redux => is a pattern to mangening and updatind the state application use the event called "Action"
//هو كأنه عبارة عن متجر يمكن استخدامه للتطبيق بشكل كلي مع وجود قواعد تضمن عدم تحديث الحالة (state) الا بطريقه يمكن التنبؤ بها 

*/

// function Counter() {
//   //state: a counter value
//   const [counter, setCounter] = useState(0);
//   //Action: code that causes an update to the state  when something happens
//   const increment = () => {
//     setCounter((prevCounter) => prevCounter + 1);
//   };
//   // view the UI defition
//   return (
//     <div>
//       value: {counter}
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// }
// export default Counter;

const obj = { a: 1, b: 2 };

obj.b = 3;

const arr = ["a", "b"];

arr.push("c");
arr[1] = "d";


// typically action object might look like 

const addTodoAction = {
  type:"todo/todoAdded",
  payload:'Buy milk'
}

//action creater 

const addTodo = text => {
  return{
    type: "todo/todoAdded",
    payload: text
  }
}


/* Reducer 
  = >  is a function that recive the current state and an action
  , decide how update the state if necessary, and return the new state(action, state) => new state(action, state)
*/