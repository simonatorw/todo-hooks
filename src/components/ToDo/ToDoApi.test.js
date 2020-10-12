import { add, remove, async } from './ToDoApi';

describe('ToDoApi.js', () => {
  let toDos;

  beforeEach(() => {
    toDos = [1, 2];
  });

  test('add', () => {
    const setToDoState = (val) => toDos = val;
    const setValState = jest.fn();
    const evt = { keyCode: 13, target: { value: ''}};

    add('foo', toDos, setToDoState, setValState, evt);

    expect(toDos).toEqual([1, 2, 'foo']);
  });

  test('remove', () => {
    const setToDoState = (val) => toDos = val;
    
    remove(1, toDos, setToDoState);

    expect(toDos).toEqual([1]);
  });

  test('async', async () => {
    const data = await async.getApi('./data.json');

    expect(data.length).toBe(2);
  });
});