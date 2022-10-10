import { TodoProvider } from './components/context/TodoContext';
import './App.css';
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';


function App() {
  return (
    <TodoProvider>
      <div >
        <h2 
        style={{margin: "30px 0",
      letterSpacing: "1.5px",
    fontSize: "1.5em"
  }}
        className='text-center'>What are your plans for today?</h2>
       <AddTodo />
       <Todo/>
      </div>
    </TodoProvider>
  );
}

export default App;
