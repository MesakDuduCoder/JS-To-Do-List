import { display } from './AddTask.js';

export const checkTaskDone = (e) => {
  const set = (list) => {
    localStorage.setItem('toDoList', JSON.stringify(list));
  };
  const lists = localStorage.getItem('toDoList');
  const get = JSON.parse(lists);

  let tasks = [];

  if (get !== null) {
    tasks = get;
  }

  const todoList = e.currentTarget.parentNode;
  const targetBox = e.currentTarget.parentNode.children[1].innerHTML;

  if (todoList.classList.contains('completed')) {
    tasks.forEach((taskItem) => {
      if (taskItem.description === targetBox) {
        taskItem.completed = false;
        set(tasks);
      }
    });
    display();
  }

  if (todoList.classList.contains('uncompleted')) {
    tasks.forEach((taskItem) => {
      if (taskItem.description === targetBox) {
        taskItem.completed = true;
        set(tasks);
      }
    });
    display();
  }
};

export const clearTasks = () => {
  const set = (list) => {
    localStorage.setItem('toDoList', JSON.stringify(list));
  };

  const lists = localStorage.getItem('toDoList');
  const get = JSON.parse(lists);

  let tasks = [];

  if (get !== null) {
    tasks = get;
  }
  const filteredList = tasks.filter((item) => item.completed === false);
  set(filteredList);
  display();
};
