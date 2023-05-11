const saveToStorage = (item) => {
  localStorage.setItem("toDoList", JSON.stringify(item));
};

const editItem = (item) => {
  const writeEdit = document.getElementById("toEdit");
  const replacer = document.getElementById("edit");
  replacer.value = item;
  writeEdit.innerHTML = "";
  return { edit: replacer.value, original: writeEdit.innerHTML };
};

const saveEdit = (item) => {
  let tasks = [{
    description: "dog"
  }];
  let result = '';
  const newValue = document.getElementById("edit");
  tasks.forEach((taskItem) => {
    if (item === taskItem.description) {
      taskItem.description = newValue.value;
      result = taskItem.description;
    }
  });
  saveToStorage(tasks);
  return result;
};

const checkTaskDone = (arg) => {
  let tasks = [
    {
      description: "dog",
      completed: false,
      index: 0
    },
    {
      description: "cat",
      completed: true,
      index: 1
    },
  ];
  const description = arg.description;
  const status = arg.status;
  let result = '';

  if (status === "completed") {
    tasks.forEach((taskItem) => {
      if (taskItem.description === description) {
        result = 'uncompleted';
        saveToStorage(tasks);
      }
    });
  }

  if (status === "uncompleted") {
    tasks.forEach((taskItem) => {
      if (taskItem.description === description) {
        result = "completed";
        saveToStorage(tasks);
      }
    });
  }

  return result;
};

const clearTasks = () => {
  let tasks = [
    {
      description: "dog",
      completed: false,
      index: 0,
    },
    {
      description: "cat",
      completed: true,
      index: 1,
    },
  ];
  const newTasks = tasks.filter((item) => item.completed === false);
  saveToStorage(newTasks);
  return {
    filtered: newTasks.length,
    list: tasks.length,
  };
};

exports.checkTaskDone = checkTaskDone;
exports.clearTasks = clearTasks;
exports.editItem = editItem;
exports.saveEdit = saveEdit;

