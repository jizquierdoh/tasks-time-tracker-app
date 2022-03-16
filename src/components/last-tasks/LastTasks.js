
function LastTasks({ tasks }) {

  return (
    <div className="text-gray-50 mt-2">
      <h3 className="text-lg font-semibold">Last tasks:</h3>
      <ul className="w-1/2 divide-y divide-slate-700 p-2 border-2 border-slate-700">
        {
          tasks?.length > 0 ?
            tasks.map(task => {
              return (
                <li
                  className="p-2 w-full"
                  key={task.id}>{task.description} for {task.hours} hours</li>
              );
            }) :
            <h2 className="text-lg font-semibold p-2 w-full">No tasks registered</h2>
        }
      </ul>
    </div>
  );
}

export default LastTasks;