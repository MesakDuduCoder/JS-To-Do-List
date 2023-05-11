import { display } from './AddTask.js';

export const checkTaskDone = (e) => {
  const lists = localStorage.getItem('toDoList');
  const get = JSON.parse(lists);
  let tasks = [];
  if (get) {
    tasks = get;
  }
  const todoList = e.currentTarget.parentNode;
  const targetBox = e.currentTarget.parentNode.children[1].innerHTML;

  if (todoList.classList.contains('completed')) {
    tasks.forEach((taskItem) => {
      if (taskItem.description === targetBox) {
        taskItem.completed = false;
        localStorage.setItem('toDoList', JSON.stringify(tasks));
      }
    });
    display();
  }

  if (todoList.classList.contains('uncompleted')) {
    tasks.forEach((taskItem) => {
      if (taskItem.description === targetBox) {
        taskItem.completed = true;
        localStorage.setItem('toDoList', JSON.stringify(tasks));
      }
    });
    display();
  }
};

export const editItem = (item) => {
  const writeEdit = document.createElement('input');
  writeEdit.id = 'edit';
  writeEdit.type = 'text';
  writeEdit.value = item.innerHTML;
  item.innerHTML = '';
  item.parentNode.insertBefore(writeEdit, item.nextSibling);
};

export const saveEdit = (item) => {
  const lists = localStorage.getItem('toDoList');
  const get = JSON.parse(lists);
  let tasks = [];
  if (get) {
    tasks = get;
  }

  const newValue = document.querySelector('#edit');
  tasks.forEach((taskItem) => {
    if (item.description === taskItem.description) {
      taskItem.description = newValue.value;
    }
  });
  localStorage.setItem('toDoList', JSON.stringify(tasks));
};

export const clearTasks = (e) => {
  const lists = localStorage.getItem('toDoList');
  const get = JSON.parse(lists);
  let tasks = [];
  if (get) {
    tasks = get;
  }

  const newTasks = tasks.filter((item) => item.completed === false);
  localStorage.setItem('toDoList', JSON.stringify(newTasks));

  display();
};