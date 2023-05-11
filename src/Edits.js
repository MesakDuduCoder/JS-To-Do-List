import { getFromStorage, saveToStorage } from "./Storage.js";

export const editItem = (item) => {
  const writeEdit = document.createElement("input");
  writeEdit.id = "edit";
  writeEdit.type = "text";
  writeEdit.value = item.innerHTML;
  item.innerHTML = "";
  item.parentNode.insertBefore(writeEdit, item.nextSibling);
  writeEdit.focus();
};

export const saveEdit = (item) => {
  let tasks = getFromStorage();

  const newValue = document.querySelector("#edit");
  tasks.forEach((taskItem) => {
    if (item.description === taskItem.description) {
      taskItem.description = newValue.value;
    }
  });
  saveToStorage(tasks);
};
