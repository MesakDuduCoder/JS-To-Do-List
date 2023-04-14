jest.mock('./addAndRemoveTask');
const { addTask, removeTask } = require('./addAndRemoveTask');

describe('add items to Todo', () => {
  const setItemSpy = jest.spyOn(
    Object.getPrototypeOf(window.localStorage),
    'setItem',
  );
  it('Add Item', () => {
    expect(addTask('task one')).toEqual([
      {
        description: 'task one',
        completed: false,
        index: 0,
      },
    ]);

    expect(addTask().length).toBeGreaterThan(0);
    expect(setItemSpy).toHaveBeenCalled();
  });

  it('Remove Item', () => {
    removeTask(0);
    expect(removeTask().length).toEqual(0);
    expect(setItemSpy).toHaveBeenCalled();
  });
});
