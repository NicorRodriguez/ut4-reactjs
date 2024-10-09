import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [editTaskName, setEditTaskName] = useState('');

  const changeTaskName = (e)=>{
    setTaskName(e.target.value)
  }

  const _editTaskName = (e)=>{
    setEditTaskName(e.target.value)
  }

  const addTask = ()=>{
    let newTasks = [... tasks]
    newTasks.push(taskName)
    setTasks(newTasks)
    setTaskName('')
  }

  const deleteTask = (task)=>{
    let newTasks = [... tasks]
    newTasks = newTasks.filter((newTask)=> task != newTask)   
    setTasks(newTasks)
  }

  const editTask = (newTask)=>{
    let newTasks = []
    tasks.forEach((task)=> {
      if(newTask == task) {
        newTasks.push(editTaskName)
      } else {
        newTasks.push(task)
      }
    })
    console.log(newTasks);
    
    setTasks(newTasks)
    setEditTaskName('')
  }

  return (
    <div className="App">
      <header className="App-header">
        <input value={taskName} onChange={changeTaskName}>
        </input>
        <button id='addTask' onClick={addTask}>Add task</button>
        {tasks.map((task, i)=>(
          <div key={i}>
            <p >
              Tarea: {task}
            </p>
            <input defaultValue={task} onChange={_editTaskName}></input>
            <button onClick={()=>{editTask(task)}}>Cambiar tarea</button>
            <button onClick={()=>{deleteTask(task)}}>Borrar tarea</button>
          </div>
        ))
        }
      </header>
    </div>
  );
}

export default App;
