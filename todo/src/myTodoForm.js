import React from "react";
import reducer from './reducers/reducer'


 const TodoForm = (props) => {



    return(
        <form onSubmit = {props.handleSubmit}>
        
        <input 
         autoComplete="off"
            type = "text"
            name = "newTodo"
            value = {props.newTodo}
            onChange = {props.handleChanges}
    />
    <button>
        
        Add</button>

    
    
    
        </form>
    )



}

export default TodoForm