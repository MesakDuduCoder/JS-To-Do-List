const { addTask, removeTask } = require('./addAndRemoveTest');

test('Add Item', () => {
  expect(addTask().length).toBeGreaterThan(0);
  expect(addTask()[0]).toHaveProperty('description', 'completed', 'index');
});

test('Remove Item', () => {
  removeTask();
  expect(removeTask().length).toEqual(0);
});
