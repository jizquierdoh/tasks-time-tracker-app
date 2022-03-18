import './App.css';

import AddTask from './components/add-task/AddTask';
import LastTasks from './components/last-tasks/LastTasks';

import { useTasksStore } from './store';

function App() {

  const tasks = useTasksStore(state => state.taskList);

  return (
    <div className='w-screen h-screen bg-gray-800 p-4 mx-auto'>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-xl font-semibold text-gray-50">Daily Time Tracker</h2>
        <AddTask />
        <LastTasks tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
