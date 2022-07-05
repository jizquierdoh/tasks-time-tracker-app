import create from 'zustand';
import { devtools, persist } from 'zustand/middleware'

const store = create(
  devtools(
    persist(
      (set) => ({
        taskList: [],
        addTask: task => {
          set(state => ({
            taskList: [...state.taskList, task]
          }), false, 'addTask');
        },
        updateTask: task => {
          set(state => ({
            taskList: [...state.taskList.filter(t => t.id !== task.id), task]
          }), false, 'updateTask');
        },
        deleteTask: taskId => {
          set(state => ({
            taskList: state.taskList.filter(t => t.id !== taskId)
          }), false, 'deleteTask');
        },
        taskToUpdate: null,
        setTaskToUpdate: task => {
          set(state => ({
            taskToUpdate: task
          }), false, 'setTaskToUpdate');
        },
        taskToTrack: null,
        setTaskToTrack: task => {
          set(state => ({
            taskToTrack: task
          }), false, 'setTaskToTrack');
        }
      }),
      {
        name: 'tasks'
      }
    )
  )
);

export const useTasksStore = store;