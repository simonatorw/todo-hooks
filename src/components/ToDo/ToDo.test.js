import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ToDo from './ToDo';

jest.mock('react-redux', () => {
  return {
    useDispatch: jest.fn(),
    useSelector: jest.fn()
  };
});

describe('ToDo.js', () => {
  let wrapper;
  let useEffect;
  let useCb;
  let state;

  beforeEach(() => {
    state = {
      toDoState: {}
    };

    useDispatch.mockImplementationOnce(() => jest.fn());
    useSelector.mockImplementationOnce(f => f(state));

    useEffect = jest.spyOn(React, 'useEffect');
    useEffect.mockImplementationOnce(f => f());
    useEffect.mockImplementationOnce(f => f());

    const evt = { keyCode: 13, target: { value: ''}};

    useCb = jest.spyOn(React, 'useCallback');
    useCb.mockImplementationOnce(f => f(evt));
    useCb.mockImplementationOnce(f => f(evt));
    useCb.mockImplementationOnce(f => f(1));
    
    wrapper = shallow(<ToDo />);
  });

  test('ToDo has a view', () => {
    expect(wrapper.find('ToDoView').length).toBe(1);
  });

  test('ToDo calls 2 useEffects', () => {
    expect(useEffect).toBeCalledTimes(8);
  });  
});
