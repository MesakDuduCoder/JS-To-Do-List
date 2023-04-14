const tasks = [
  {
    description: 'cat',
    completed: false,
    index: 0,
  },
  {
    description: 'dog',
    completed: true,
    index: 1,
  },
];

const checkTaskDone = (arg) => {
  const items = arg.item;
  const done = arg.status;
  let result = false;

  if (done === 'completed') {
    tasks.forEach((taskItem) => {
      if (taskItem.description === items) {
        result = true;
        localStorage.setItem('toDoList', JSON.stringify(tasks));
      }
    });
  }

  if (done === 'uncompleted') {
    tasks.forEach((taskItem) => {
      if (taskItem.description === items) {
        localStorage.setItem('toDoList', JSON.stringify(tasks));
        result = false;
      }
    });
  }

  return result;
};

const editItem = (item) => {
  const writeEdit = document.getElementById('toEdit');
  const replacer = document.getElementById('edit');
  replacer.value = item;
  writeEdit.innerHTML = '';
  localStorage.setItem('toDoList', JSON.stringify(tasks));
  return { edit: replacer.value, original: writeEdit.innerHTML };
};

const clearTasks = () => {
  const newTasks = tasks.filter((item) => item.completed === false);
  localStorage.setItem('toDoList', JSON.stringify(newTasks));
  return {
    filtered: newTasks.length,
    list: tasks.length,
  };
};

exports.checkTaskDone = checkTaskDone;
exports.editItem = editItem;
exports.clearTasks = clearTasks;