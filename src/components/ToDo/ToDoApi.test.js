import { add, remove } from './ToDoApi';

jest.mock('./ToDoApi', () => {
  const originalModule = jest.requireActual('./ToDoApi');
  return {
    ...originalModule,
    add: jest.fn(),
  };
});

describe('ToDoApi.js', () => {
  let toDos;

  beforeEach(() => {
    toDos = [1, 2];
    jest.resetAllMocks();
  });

  test('add', () => {
    const setToDoState = (val) => toDos = val;
    const setValState = jest.fn();
    const evt = { keyCode: 13, target: { value: ''}};

    add.mockImplementationOnce((val, todos, setf) => setf([ ...todos, val ]));
    add('foo', toDos, setToDoState, setValState, evt);

    expect(toDos).toEqual([1, 2, 'foo']);
  });

  test('add2', () => {
    const setToDoState = (val) => toDos = val;
    const setValState = jest.fn();
    const evt = { keyCode: 13, target: { value: ''}};

    add.mockImplementationOnce((val, todos, setf) => setf([ ...todos, 'duh' ]));
    add('foo', toDos, setToDoState, setValState, evt);

    expect(toDos).toEqual([1, 2, 'duh']);
  });

  test('remove', () => {
    const setToDoState = (val) => toDos = val;
    
    remove(1, toDos, setToDoState);

    expect(toDos).toEqual([1]);
  });
});