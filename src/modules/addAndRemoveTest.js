class Task {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

const tasks = [];

const addTask = () => {
  const completed = false;
  const index = tasks.length;
  const description = 'cat';
  const task = new Task(description, completed, index);
  tasks.push(task);
  return tasks;
};

const removeTask = () => {
  const indexNo = 0;
  tasks.splice(indexNo, 1);
  return tasks;
};

exports.addTask = addTask;
exports.removeTask = removeTask;