export const saveToStorage = (item) => {
  localStorage.setItem("toDoList", JSON.stringify(item));
}

export const getFromStorage = () => {
  const lists = localStorage.getItem("toDoList");
  const get = JSON.parse(lists);
  let tasks = [];
  if (get) {
    tasks = get;
  }
  return tasks
}