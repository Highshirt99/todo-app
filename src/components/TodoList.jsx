import React, { useState, useContext} from 'react'
import { TodoContext } from './context/TodoContext';
import { FaTrash, FaCheck } from "react-icons/fa";

function TodoList({todo}) {
    const {deleteTodo} = useContext(TodoContext)
    const [isComplete, setIsComplete] = useState(false)
    const toggleIsComplete = () => {
        setIsComplete(!isComplete)
    }
  return (
   
           
               <li>
               {isComplete ? <p>
                   <del
                   style={{fontSize: "1em",
                               fontWeight: "bolder"}}>{todo.text}</del></p> : <p   style={{fontSize: "1em",
               fontWeight: "bolder"}}> {todo.text}</p>}

               <div style={{position: "relative",
            bottom: "36px",
            left: "150px"}}>
                   
                            <FaCheck
                            title ={isComplete ? "Unmark" : "Mark complete"}
                            style={{
                                        cursor: "pointer",
                                        marginRight: "25px"}}
                             onClick={toggleIsComplete}/>
                   
                            <FaTrash
                             title = "Delete task"
                            style={{color: "red",
                                        cursor: "pointer"}}
                            onClick = {() => deleteTodo(todo.id)}/>
               </div>
               
           
                </li>
           
    
  )
}

export default TodoList