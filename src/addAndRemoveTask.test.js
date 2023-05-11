jest.mock('./addAndRemoveTask');
const { addTask, removeTask } = require('./addAndRemoveTask');

describe('add items to Todo', () => {
  const setItemSpy = jest.spyOn(
    Object.getPrototypeOf(window.localStorage),
    'setItem',
  );
  const getItemSpy = jest.spyOn(
    Object.getPrototypeOf(localStorage), 
    'getItem');
  document.body.innerHTML = `<ul id='list'></ul>`;
  it('Add Item', () => {
   let add = addTask("task one");
    expect(list.childNodes.length).toEqual(1)
    expect(add.length).toEqual(1);
    let addAnother = addTask("task two");
    expect(addAnother.length).toEqual(2);
    expect(list.childNodes.length).toEqual(2);
    expect(getItemSpy).toHaveBeenCalled();
    expect(setItemSpy).toHaveBeenCalled();
  });

});
