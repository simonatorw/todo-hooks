import toDoReducer from './toDoReducer';

describe('toDoReducer.js', () => {
  let state;

  beforeEach(() => {
    state = {
      toDos: [1]
    };
  });

  test('Add action returns correct state', () => {
    const result = toDoReducer(state, { type: 'ADD', payload: 2 })
    const expected = { toDos: [1, 2] };

    expect(result).toEqual(expected);
  });

  test('Remove action returns correct state', () => {
    const result = toDoReducer(state, { type: 'REMOVE', payload: 0 })
    const expected = { toDos: [] };

    expect(result).toEqual(expected);
  });
});