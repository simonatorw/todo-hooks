import { add, remove } from './ToDoApi';

describe('ToDoApi.js', () => {
  test('add', () => {
    const dispatch = (val) => val;
    const setValState = jest.fn();
    const evt = { keyCode: 13, target: { value: ''}};
    
    const result = add({ payload: 1 }, setValState, dispatch, evt);
    const expected = { payload: 1 };

    expect(result).toEqual(expected);
  });

  test('remove', () => {
    const dispatch = (val) => val;

    const result = remove(1, dispatch);
    const expected = 1;

    expect(result).toEqual(expected);
  });
});