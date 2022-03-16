import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function AddTask({ addNewTask }) {

  const [description, setDescription] = useState('');
  const [hours, setHours] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addNewTask({ id: uuidv4(), description, hours });
    setDescription('');
    setHours('');
  };

  return (
    <div className="w-full flex flex-col">
      <form onSubmit={handleSubmit}>
        <div className="my-2">
          <input className="w-1/2 h-6 p-1 rounded-sm" type="text" value={description}
            onChange={e => setDescription(e.target.value)} required />
        </div>
        <div className="my-2">
          <input className="w-1/2 h-6 p-2 rounded-sm" type="number" min={1} max={24}
            value={hours} onChange={e => setHours(e.target.value)} required />
        </div>
        <div className="my-2">
          <button className="bg-cyan-500 px-3 py-1 rounded-sm text-gray-100"
            type="submit">Save</button>
        </div>
      </form>
    </div>
  );
}

export default AddTask;