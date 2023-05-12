import { display } from './Display.js';
import { getFromStorage, saveToStorage } from './Storage.js';

export const checkTaskDone = (e, indexNo) => {
  const tasks = getFromStorage();

  const todoList = e.currentTarget.parentNode;

  if (todoList.classList.contains('completed')) {
    tasks.forEach((taskItem) => {
      if (taskItem.index === indexNo) {
        taskItem.completed = false;
        saveToStorage(tasks);
      }
    });
    display();
  }

  if (todoList.classList.contains('uncompleted')) {
    tasks.forEach((taskItem) => {
      if (taskItem.index === indexNo) {
        taskItem.completed = true;
        saveToStorage(tasks);
      }
    });
    display();
  }
};

export const clearTasks = (e) => {
  const tasks = getFromStorage();

  const newTasks = tasks.filter((item) => item.completed === false);
  saveToStorage(newTasks);

  display();
};