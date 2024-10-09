import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');

  const changeTaskName = (e)=>{
    setTaskName(e.target.value)
  }

  const addTask = ()=>{
    let newTasks = [... tasks]
    newTasks.push(taskName)
    setTasks(newTasks)
    setTaskName('')
  }

  return (
    <div className="App">
      <header className="App-header">
        <input value={taskName} onChange={changeTaskName}>
        </input>
        <button onClick={addTask}>Add task</button>
        {tasks.map((task, i)=>(
          <p key={"task-" + i}>
            Tarea: {task}
          </p>
        ))
        }
      </header>
    </div>
  );
}

export default App;
