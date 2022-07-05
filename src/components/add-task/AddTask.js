import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useTasksStore } from '../../store';

import Timer from '../timer/Timer';

function AddTask() {
  const [id, setId] = useState('');
  const [description, setDescription] = useState('');
  const [hours, setHours] = useState('');
  const addTask = useTasksStore(store => store.addTask);
  const updateTask = useTasksStore(store => store.updateTask);
  const taskToUpdate = useTasksStore(store => store.taskToUpdate);
  const setTaskToUpdate = useTasksStore(store => store.setTaskToUpdate);
  const [taskToTrack, setTaskToTrack] = useTasksStore(store => [store.taskToTrack, store.setTaskToTrack]);

  useEffect(() => {
    if (taskToUpdate) {
      setId(taskToUpdate.id);
      setDescription(taskToUpdate.description);
      setHours(taskToUpdate.hours);
    }
  }, [taskToUpdate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!id) {
      addTask({ id: uuidv4(), description, hours });
    } else {
      updateTask({ id, description, hours });
    }

    clearFields();
    setTaskToUpdate(null);
  };

  const clearFields = () => {
    setDescription('');
    setHours('');
    setId('');
  };

  const handleTimerOn = (event) => {
    event.preventDefault();
    setTaskToTrack({ id, description, hours });
    clearFields();
  };

  return (
    <div className='flex flex-col w-4/5 gap-2'>
      {!taskToTrack &&
        <div className="flex flex-col">
          <form onSubmit={handleSubmit}>
            <div className="my-2">
              <label className="block mb-1 font-bold text-gray-50"
                htmlFor="description">Activity Description:</label>
              <textarea className="w-full p-1 rounded-sm" type="text" value={description}
                onChange={e => setDescription(e.target.value)} required>
              </textarea>
            </div>
            <div className="flex flex-row gap-4 my-2">
              <label className="font-bold text-gray-50" htmlFor="hours">Hours Spent:</label>
              <input className="w-1/6 h-6 p-2 rounded-sm" type="number" min={0.5} max={24}
                value={hours} step=".1" onChange={e => setHours(e.target.value)} required />
              <button className="px-3 py-1 font-semibold text-gray-100 rounded-sm bg-cyan-500"
                type="submit">Save</button>
              <button onClick={handleTimerOn} className="px-3 py-1 font-semibold text-gray-100 bg-green-600 rounded-sm">
                Timer On
              </button>
            </div>
            <input type="hidden" value={id} />
          </form>
        </div>}
      <div className='mt-2'>
        {taskToTrack && <Timer />}
      </div>
    </div>
  );
}

export default AddTask;