// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

import Todo from "./Todo";

const TodoList = props => {
  return (
     //When we invoke a function we pass it in anonymously

    <div className="todo-list">
      {props.todoList.map(todo => (
    
        <Todo toggleItem={props.toggleItem} key={todo.id} todo={todo}  />
      ))}
      {/* <button className="clear-btn" onClick={props.clear}> Clear Tasks</button> */}
    </div>
  );
};


export default TodoList;
