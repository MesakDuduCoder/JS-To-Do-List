import _ from 'lodash';
import './style.css';

function component() {
  const toDoList = document.getElementById('to-do-list');
  // const toDoList = document.createElement("ul");
  toDoList.classList.add('list');
  const demo = document.createElement('li');
  demo.className = 'list-item-2';
  demo.innerHTML = `
  <span id="demo">Demo</span>
  <button id="reload">
  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 0 0-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 0 1 655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 0 1 279 755.2a342.16 342.16 0 0 1-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 0 1 109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 0 0 3 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z"></path></svg>
  </button>`;
  demo.style = 'justify-content: space-between';
  toDoList.classList.add('list');
  const addTask = document.createElement('li');
  addTask.className = 'list-item-2';
  addTask.innerHTML = `
  <input type="text" placeholder="Add to your list..." class="add-task"/>
  <button class="move-item">
  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9.5 13a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" clip-rule="evenodd"></path></svg>
  </button>`;
  addTask.style = 'padding: 0 10px;';
  toDoList.appendChild(demo);
  toDoList.appendChild(addTask);
  // Lodash, now imported by this script
  const tasks = [
    {
      description: 'Go to Gym',
      completed: false,
      index: 1,
    },
    {
      description: 'Do Homework',
      completed: false,
      index: 2,
    },
    {
      description: 'Listen to Podcast',
      completed: false,
      index: 3,
    },
  ];

  tasks.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.className = 'list-item';
    const completed = document.createElement('button');
    completed.className = 'todo';
    function myFunction() {
      listItem.classList.toggle('completed');
    }
    completed.onclick = myFunction;
    completed.innerHTML = '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="30px" width="30px" xmlns="http://www.w3.org/2000/svg"><path d="M7,5C5.897,5,5,5.897,5,7v10c0,1.103,0.897,2,2,2h10c1.103,0,2-0.897,2-2V7c0-1.103-0.897-2-2-2H7z M7,17V7h10l0.002,10H7z"></path></svg>';
    const description = document.createElement('span');
    description.className = 'task-item';
    description.innerHTML = item.description;
    const move = document.createElement('button');
    move.className = 'move-item';
    move.innerHTML = '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9.5 13a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" clip-rule="evenodd"></path></svg>';
    listItem.appendChild(completed);
    listItem.appendChild(description);
    listItem.appendChild(move);
    toDoList.appendChild(listItem);
  });

  const remove = document.createElement('li');
  remove.className = 'list-item-2';
  remove.innerHTML = '<button class="remove">Clear all completed</button>';
  remove.style = 'justify-content: center';
  toDoList.appendChild(remove);
  return toDoList;
}

document.body.appendChild(component());
