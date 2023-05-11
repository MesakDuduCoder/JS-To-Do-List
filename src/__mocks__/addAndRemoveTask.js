const addTask = (item) => {
  const lists = localStorage.getItem("toDoList");
  const get = JSON.parse(lists);
  let tasks = [];
  if (get) {
    tasks = get;
  }
  tasks.push({
    description: item,
    completed: false,
    index: tasks.length,
  });
      const list = document.getElementById("list");
      const listItem = document.createElement("li");
      listItem.innerHTML = `${item}`;
      list.appendChild(listItem);

  localStorage.setItem('toDoList', JSON.stringify(tasks));
  return tasks;
};


exports.addTask = addTask;

