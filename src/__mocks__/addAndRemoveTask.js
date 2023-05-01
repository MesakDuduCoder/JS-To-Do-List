const addTask = (item) => {
  const tasks = [];
  tasks.push({
    description: item,
    completed: false,
    index: tasks.length,
  });
  localStorage.setItem('toDoList', JSON.stringify(tasks));
  return tasks;
};

const removeTask = (indexNo) => {
  const tasks = [
    {
      description: 'cat',
      completed: false,
      index: 0,
    },
  ];
  tasks.splice(indexNo, 1);
  localStorage.setItem('toDoList', JSON.stringify(tasks));
  return tasks;
};

exports.addTask = addTask;
exports.removeTask = removeTask;
