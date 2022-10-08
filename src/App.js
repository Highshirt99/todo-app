import { TodoProvider } from './components/context/TodoContext';
import './App.css';
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';


function App() {
  return (
    <TodoProvider>
      <div >
        <h2 
        style={{marginBottom: "30px",
      letterSpacing: "1.5px",
    fontSize: "1.5em"}}
        className='text-center'>Todo App</h2>
       <AddTodo />
       <Todo/>
      </div>
    </TodoProvider>
  );
}

export default App;
