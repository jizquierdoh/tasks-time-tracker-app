import './App.css';
import React, { useState, useEffect } from 'react';

import AddTask from './components/add-task/AddTask';
import LastTasks from './components/last-tasks/LastTasks';

function App() {

  const [tasksList, setTasksList] = useState([]);

  const addTask = (newTask) => {
    setTasksList([...tasksList, newTask]);
    localStorage.setItem('tasks', JSON.stringify([...tasksList, newTask]));
  };

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    console.log(tasks);
    if (tasks) {
      setTasksList(tasks);
    }
  }, []);

  return (
    <div className="container mx-auto">
      <div className="columns-1">
        <h2 className="text-xl font-semibold text-gray-50">Daily Time Tracker</h2>
        <AddTask addNewTask={addTask} />
        <LastTasks tasks={tasksList} />
      </div>
    </div>
  );
}

export default App;
