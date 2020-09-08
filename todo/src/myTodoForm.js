import React from "react";
import reducer from './reducers/reducer'


 const TodoForm = (props) => {



    return(
        <form>
        
        <input 
         autoComplete="off"
            type = "text"
            name = "newTodo"
            value = {props.newTodo}
            onChange = {props.handleChanges}
       placeholder = "ADD TODO"
    />
    <button onClick= {props.handleSubmit}>Add</button>
    <button onClick= {props.clear}>Clear</button>

    
    
    
        </form>
    )



}

export default TodoForm