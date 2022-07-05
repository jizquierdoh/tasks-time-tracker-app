import { useTasksStore } from '../../store';

function LastTasks({ tasks }) {

  const updateTask = useTasksStore(store => store.updateTask);
  const deleteTask = useTasksStore(store => store.deleteTask);
  const setTaskToUpdate = useTasksStore(store => store.setTaskToUpdate);

  const handleUpdate = (task) => {
    setTaskToUpdate(task);
    updateTask(task);
  };

  const handleDelete = (taskId) => {
    deleteTask(taskId);
  };

  return (
    <div className="w-4/5 mt-2 text-gray-50">
      <h3 className="text-lg font-semibold">Last tasks:</h3>
      <ul className="w-full p-2 border-2 divide-y divide-slate-700 border-slate-700">
        {
          tasks?.length > 0 ?
            tasks.map(task => {
              return (
                <li
                  className="w-full p-2"
                  key={task.id}>
                  <span className="flex flex-row items-center justify-between gap-2">
                    <span className='flex flex-row'>
                      <span className="mr-2" role="img" aria-label="sheep">▶️</span>
                      <p className='pr-2'>{task.description}</p>
                    </span>
                    <span className='flex flex-row justify-between gap-2'>
                      <p>{task.hours} hours</p>
                      <button title="Update task" onClick={() => handleUpdate(task)}>✏️</button>
                      <button title="Delete task" onClick={() => handleDelete(task.id)}>❌</button>
                    </span>
                  </span>
                </li>
              );
            }) :
            <h2 className="w-full p-2 font-semibold">No tasks registered</h2>
        }
      </ul>
    </div>
  );
}

export default LastTasks;