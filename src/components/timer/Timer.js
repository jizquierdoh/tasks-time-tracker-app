import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useTasksStore } from '../../store';

function Timer() {
	const [minutes, setMinutes] = useState(0);
	const [taskToTrack, addTask, setTaskToTrack] =
		useTasksStore(store => [store.taskToTrack, store.addTask, store.setTaskToTrack]);

	useEffect(() => {
		const timer = setInterval(() => {
			setMinutes(minutes + 1);
		}, 5000);
		return () => clearInterval(timer);
	}, [minutes]);

	const handleStop = () => {
		const hoursSpent = (minutes / 60).toFixed(1);
		addTask({ ...taskToTrack, id: uuidv4(), hours: taskToTrack.hours + hoursSpent });
		setTaskToTrack(null);
	};

	return (
		<div className="flex flex-row items-center justify-between gap-2 p-2 text-gray-100 rounded-md bg-slate-700">
			<div className='flex flex-row items-center justify-between gap-2'>
				<h2 className='text-base'>
					{taskToTrack && taskToTrack.description}
				</h2>
				<p className='text-base text-center'>{minutes < 60 ? minutes : (minutes / 60).toFixed(1)} {minutes > 60 ? 'hours' : 'minutes'}</p>
			</div>
			<button onClick={handleStop} className='px-3 py-1 text-base font-semibold text-gray-100 bg-red-800 rounded-sm'>Stop</button>
		</div>
	);
}

export default Timer;
