import React from "react";

const Todo = props => {
  return (
    <div
    //   onClick={() => props.toggleItem} //When we invoke a function we pass it in anonymously
      className={`todo${props.todo.completed ? " completed" : ""}`}
    >
      <p>{props.todo.item}</p>
    </div>
  );
};

export default Todo;
