import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useTasksStore } from '../../store';

function AddTask() {
  const [id, setId] = useState('');
  const [description, setDescription] = useState('');
  const [hours, setHours] = useState('');
  const addTask = useTasksStore(store => store.addTask);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!id) {
      addTask({ id: uuidv4(), description, hours });
    }

    clearFields();
  };

  const clearFields = () => {
    setDescription('');
    setHours('');
    setId('');
  };

  return (
    <div className="flex flex-col w-4/5">
      <form onSubmit={handleSubmit}>
        <div className="my-2">
          <label className="block text-gray-50 font-bold mb-1"
            htmlFor="description">Activity Description:</label>
          <textarea className="w-full p-1 rounded-sm" type="text" value={description}
            onChange={e => setDescription(e.target.value)} required>
          </textarea>
        </div>
        <div className="my-2 flex flex-row gap-4">
          <label className="text-gray-50 font-bold" htmlFor="hours">Hours Spent:</label>
          <input className="w-1/6 h-6 p-2 rounded-sm" type="number" min={0.5} max={24}
            value={hours} step=".1" onChange={e => setHours(e.target.value)} required />
          <button className="bg-cyan-500 w-1/6 px-3 py-1 rounded-sm text-gray-100"
            type="submit">Save</button>
        </div>
        <input type="hidden" value={id} />
      </form>
    </div>
  );
}

export default AddTask;