import React, { useState } from 'react';

const TodoList = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  // Maneja el cambio del input
  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  // Agrega una nueva tarea a la lista
  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask(''); // Limpia el input
    }
  };

  // Elimina una tarea de la lista
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <div>
        <input
          type="text"
          value={task}
          onChange={handleInputChange}
          placeholder="Escribe una tarea"
        />
        <button onClick={addTask}>Agregar tarea</button>
      </div>
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            {t} <button onClick={() => deleteTask(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
