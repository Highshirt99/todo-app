import React, {createContext, useReducer} from 'react'
import TodoReducer from "./TodoReducer"

const initialState = {
    todos: []
}

export const TodoContext = createContext(initialState)

export const TodoProvider = ({children}) =>  {
    const [state, dispatch] = useReducer(TodoReducer, initialState)

    function addTodo(todo){
        dispatch(
            {
                type : "ADD_TODO",
                payload: todo
            }
        )
    }

    function deleteTodo(id){
        dispatch( {
            type: "DELETE_TODO",
            payload: id
        })
    }


  return (
   <TodoContext.Provider value = {{todos: state.todos,
   addTodo, deleteTodo}}>
        {children}
   </TodoContext.Provider>
  )
}

export default TodoContext