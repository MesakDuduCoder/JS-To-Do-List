jest.mock('./Edits');

const { checkTaskDone, editItem, clearTasks } = require('./Edits.js');

describe('add items to Todo', () => {
  const setItemSpy = jest.spyOn(
    Object.getPrototypeOf(window.localStorage),
    'setItem',
  );
  it('Complete task', () => {
    expect(checkTaskDone({ item: 'dog', status: 'completed' })).toBeTruthy();
    expect(checkTaskDone({ item: 'cat', status: 'uncompleted' })).toBeFalsy();

    expect(setItemSpy).toHaveBeenCalled();
  });

  it('Edit description', () => {
    document.body.innerHTML = '<li><button></button><input id=\'edit\' type=\'text\' value=\'\'><span id=\'toEdit\'>cat</span><button></button></li>';
    const result = editItem('cat');
    const edited = result.edit;
    const ori = result.original;

    expect(edited).toEqual('cat');
    expect(ori).toEqual('');

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
