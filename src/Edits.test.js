jest.mock('./Edits');
const { checkTaskDone, editItem, clearTasks, saveEdit } = require('./Edits.js');

describe('Todo list utilities', () => {
  const setItemSpy = jest.spyOn(
    Object.getPrototypeOf(window.localStorage),
    'setItem',
  );
  const getItemSpy = jest.spyOn(
    Object.getPrototypeOf(window.localStorage),
    "getItem"
  );

  document.body.innerHTML =
      "<li><input id='edit' type='text' value=''><span id='toEdit'>dog</span></li>";
  it("Edit description", () => {
    const result = editItem("cat");
    const editedText = result.edit;
    const originalText = result.original;
    expect(editedText).toEqual("cat");
    expect(originalText).toEqual("");

  });

    it("Save edit", () => {
      const result = saveEdit("dog");
      expect(result).toEqual("cat");
      expect(setItemSpy).toHaveBeenCalled();
    });

    it('Complete task', () => {
      expect(checkTaskDone({ description: 'dog', status: 'completed' })).toEqual('uncompleted');
      expect(checkTaskDone({ description: "cat", status: "uncompleted" })).toEqual(
        "completed"
      );
  
      expect(setItemSpy).toHaveBeenCalled();
    });
  
    it('Clear completed', () => {
      const tasks = clearTasks();
      const filteredTask = tasks.filtered;
      const originalList = tasks.list;
      expect(filteredTask).toBeLessThan(originalList);
      expect(setItemSpy).toHaveBeenCalled();
    });
});
