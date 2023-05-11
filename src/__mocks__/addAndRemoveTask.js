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

const removeTask = (indexNo) => {
  const lists = localStorage.getItem("toDoList");
  const get = JSON.parse(lists);
  let tasks = [];
  if (get) {
    tasks = get;
  }
 
  tasks.splice(indexNo, 1);
   const list = document.getElementById("list");

   item = list.childNodes[indexNo];
    //console.log(item);
   list.removeChild(item);
  localStorage.setItem('toDoList', JSON.stringify(tasks));
  return tasks;
};

exports.removeTask = removeTask;
exports.addTask = addTask;

