import React, {useContext} from 'react'
import { TodoContext } from './context/TodoContext';
import TodoList from './TodoList';

function Todo() {
    const {todos} = useContext(TodoContext)
  return (
    
        <ol>
            { todos.map((todo) =>  (<TodoList
            key = {todo.id}
            todo = {todo}
            />))}
        </ol>

  )
}

export default Todo