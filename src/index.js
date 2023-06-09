import _ from 'lodash';
import './style.css';
import { clearTasks } from './CheckAndClear.js';
import { display } from './Display.js';
import { addTask } from './AddRemoveTask.js';

function component() {
  const demo = document.getElementById('Demo');
  demo.className = 'list-item-2';
  demo.innerHTML = `
  <span id="demo">Demo</span>
  <button id="reload">
  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="30px" width="30px" xmlns="http://www.w3.org/2000/svg"><path d="M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 0 0-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 0 1 655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 0 1 279 755.2a342.16 342.16 0 0 1-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 0 1 109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 0 0 3 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z"></path></svg>
  </button>`;
  demo.style = 'justify-content: space-between';

  const addTask = document.getElementById('Add-to-list');
  addTask.className = 'list-item-2';
  addTask.innerHTML = `
  <form id="add-task-form">
    <input type="text" placeholder="Add to your list..." id="add-task"/>
  </form>
  <button id="submit-task">
  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="30px" width="30px" xmlns="http://www.w3.org/2000/svg"><path d="M16,13h-6v-3l-5,4l5,4v-3h7c0.553,0,1-0.447,1-1V5h-2V13z"></path></svg>
  </button>`;
  addTask.style = 'padding: 0 10px;';

  const remove = document.getElementById('Remove');
  const clearCompleted = document.createElement('button');
  clearCompleted.id = 'remove';
  clearCompleted.innerHTML = 'Clear all completed';
  remove.className = 'list-item-2';
  remove.style = 'justify-content: center';
  clearCompleted.addEventListener('click', (e) => {
    clearTasks();
  });
  remove.appendChild(clearCompleted);
}

window.addEventListener('DOMContentLoaded', (e) => {
  display();
  const form = document.getElementById('add-task-form');

  const handleAddTask = () => {
    const taskInput = document.getElementById('add-task');
    const description = taskInput.value;
    addTask(description);
    taskInput.value = '';
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    handleAddTask();
    display();
  });

  const enter = document.querySelector('#submit-task');
  enter.addEventListener('click', (e) => {
    e.preventDefault();
    handleAddTask();
    display();
  });
});
document.body.appendChild(component());
