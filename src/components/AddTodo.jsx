import React, {useState, useContext, useEffect} from 'react'
import { TodoContext } from './context/TodoContext';
import { db } from './../dexie';



function AddTodo() {
const [text, setText] = useState("")

const  {addTodo} = useContext(TodoContext)




const onSubmit = (e) => {
    e.preventDefault()
   
    const newTodo = {
        id: Math.random() * 100000000000,
        text
    }
 
  addTodo(newTodo)
    e.target.todo.value = ""
}

  return (
    <div>
        <form className='form-group'
                onSubmit = {onSubmit}
        style={{maxWidth: "200px",
        margin: "0 auto"}}>
         
                <input
                className='form-control'
                type="text"
                name='todo'
                placeholder= "Add a todo"
                onChange={(e) => setText(e.target.value)}
                required
                />
        <div className="text-center">
            <button 
                   className='btn btn-primary my-4'
                  > Save </button>
        </div>
        </form>
    </div>
  )
}

export default AddTodo