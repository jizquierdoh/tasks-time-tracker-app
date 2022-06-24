import { useTasksStore } from '../../store';

function LastTasks({ tasks }) {

  const updateTask = useTasksStore(store => store.updateTask);
  const deleteTask = useTasksStore(store => store.deleteTask);

  const handleUpdate = (task) => {
    updateTask(task);
  };

  const handleDelete = (taskId) => {
    deleteTask(taskId);
  };

  return (
    <div className="text-gray-50 mt-2 w-4/5">
      <h3 className="text-lg font-semibold">Last tasks:</h3>
      <ul className="w-full divide-y divide-slate-700 p-2 border-2 border-slate-700">
        {
          tasks?.length > 0 ?
            tasks.map(task => {
              return (
                <li
                  className="p-2 w-full"
                  key={task.id}>
                  <span className="flex flex-row gap-2 items-center">
                    <span className="mr-2" role="img" aria-label="sheep">▶️</span>
                    <p>{task.description}</p>
                    <p>{task.hours} hours</p>
                    <button title="Update task" onClick={() => handleUpdate(task.id)}>✏️</button>
                    <button title="Delete task" onClick={() => handleDelete(task.id)}>❌</button>
                  </span>
                </li>
              );
            }) :
            <h2 className="font-semibold p-2 w-full">No tasks registered</h2>
        }
      </ul>
    </div>
  );
}

export default LastTasks;