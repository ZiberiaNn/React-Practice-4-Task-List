import Task from "./Components/Task";
import TaskForm from "./Components/TaskForm";

import './App.css';
import TaskList from "./Components/TaskList";

function App() {
  return (
    <div className="task-app">
      <div className='tasks-list'>
        <h1>Mis tareas</h1>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
