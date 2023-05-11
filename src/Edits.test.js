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

 
});
