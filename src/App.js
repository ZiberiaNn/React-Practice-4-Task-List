import Task from "./Components/Task";
import './App.css';

function App() {
  return (
    <div className="task-app">
      <div className='tasks-list'>
        <h1>Mis tareas</h1>
        <Task text="Learn React"></Task>
      </div>
    </div>
  );
}

export default App;
