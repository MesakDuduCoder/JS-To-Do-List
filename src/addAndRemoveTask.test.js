jest.mock('./addAndRemoveTask');
const { addTask, removeTask } = require('./addAndRemoveTask.js');

describe('add items to Todo', () => {
  const setItemSpy = jest.spyOn(
    Object.getPrototypeOf(window.localStorage),
    'setItem',
  );
  const getItemSpy = jest.spyOn(
    Object.getPrototypeOf(localStorage),
    'getItem',
  );
  document.body.innerHTML = '<ul id=\'list\'></ul>';
  const list = document.getElementById('list');
  it('Add Item', () => {
    const add = addTask('task one');
    expect(list.childNodes.length).toEqual(1);
    expect(add.length).toEqual(1);
    const addAnother = addTask('task two');
    expect(addAnother.length).toEqual(2);
    expect(list.childNodes.length).toEqual(2);
    expect(getItemSpy).toHaveBeenCalled();
    expect(setItemSpy).toHaveBeenCalled();
  });

  it('Remove Item', () => {
    const remove = removeTask(1);
    expect(remove.length).toEqual(1);
    expect(list.childNodes.length).toEqual(1);
    const removeAnother = removeTask(0);
    expect(removeAnother.length).toEqual(0);
    expect(list.childNodes.length).toEqual(0);
    expect(getItemSpy).toHaveBeenCalled();
    expect(setItemSpy).toHaveBeenCalled();
  });
});
