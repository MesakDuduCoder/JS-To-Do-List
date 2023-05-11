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




exports.editItem = editItem;
exports.saveEdit = saveEdit;

