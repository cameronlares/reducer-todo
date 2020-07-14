import React, { useState, useReducer } from "react";
import logo from "./logo.svg";
import "./App.css";
import { initialState, reducer } from "./reducers/reducer";
import TodoForm from "./myTodoForm";
import TodoList from "./TodoList";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  const handleChanges = (e) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: newTodo });
    setNewTodo("");
  };


const click = () => {
  dispatch({ type: "TOGGLE_TODO", payload: newTodo.id });
    };



  return (
    <div className="App">
      <h2>Welcome to your Todo App!</h2>

      <TodoList 
        onClick = { () =>click}
        todoList={state}
      />

      <TodoForm 
        handleSubmit={handleSubmit}
        // value={newTodo}
        handleChanges={handleChanges}
    
      />

    </div>
  );
}

export default App;
