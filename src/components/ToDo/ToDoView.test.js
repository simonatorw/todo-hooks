import React from 'react';

import ToDoView from './ToDoView';

describe('ToDoView.js', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      toDos: [1, 2],
      updateField: jest.fn(),
      add: jest.fn(),
      remove: jest.fn(),
      val: 'foo'
    }
    wrapper = shallow(<ToDoView {...props} />);
  });

  test('ToDoView has a title', () => {
    expect(wrapper.find('h2').length).toBe(1);
  });

  test('ToDoView has a textbox', () => {
    expect(wrapper.find('input').length).toBe(1);
  });

  test('ToDoView can remove an item', () => {
    wrapper.find('li').at(0).simulate('dblclick');

    expect(props.remove.mock.calls.length).toBe(1);
  });
});
