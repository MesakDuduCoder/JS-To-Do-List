import { getFromStorage, saveToStorage } from "./Storage.js";

export const addTask = (description) => {
  let tasks = getFromStorage();
  tasks.push({
    description,
    completed: false,
    index: tasks.length,
  });
  saveToStorage(tasks);
};

export const removeTask = (indexNo) => {
let tasks = getFromStorage();
  tasks.splice(indexNo, 1);
  saveToStorage(tasks);
};
