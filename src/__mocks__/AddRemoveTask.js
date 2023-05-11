const saveToStorage = (item) => {
  localStorage.setItem('toDoList', JSON.stringify(item));
};

const getFromStorage = () => {
  const lists = localStorage.getItem('toDoList');
  const get = JSON.parse(lists);
  let tasks = [];
  if (get) {
    tasks = get;
  }
  return tasks;
};

const addTask = (item) => {
  const tasks = getFromStorage();
  tasks.push({
    description: item,
    completed: false,
    index: tasks.length,
  });
  const list = document.getElementById('list');
  const listItem = document.createElement('li');
  listItem.innerHTML = `${item}`;
  list.appendChild(listItem);

  saveToStorage(tasks);
  return tasks;
};

const removeTask = (indexNo) => {
  const tasks = getFromStorage();

  tasks.splice(indexNo, 1);
  const list = document.getElementById('list');
  const item = list.childNodes[indexNo];
  list.removeChild(item);
  saveToStorage(tasks);
  return tasks;
};

exports.removeTask = removeTask;
exports.addTask = addTask;
