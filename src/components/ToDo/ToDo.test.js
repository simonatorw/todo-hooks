import React from 'react';
import { act } from 'react-dom/test-utils';

import ToDo from './ToDo';
import { async } from './ToDoApi';

describe('ToDo.js', () => {
  let wrapper;
  let useEffect;
  let useCb;

  beforeEach(() => {
    jest.spyOn(async, 'getApi').mockResolvedValueOnce([1, 2, 3]);

    useEffect = jest.spyOn(React, 'useEffect');
    useEffect.mockImplementationOnce(f => f());
    useEffect.mockImplementationOnce(f => f());

    const evt = { keyCode: 13, target: { value: ''}};

    useCb = jest.spyOn(React, 'useCallback');
    useCb.mockImplementationOnce(f => f(evt));
    useCb.mockImplementationOnce(f => f(evt));
    useCb.mockImplementationOnce(f => f(1, evt));
    
    wrapper = shallow(<ToDo />);
  });

  test('ToDo has a view', () => {
    expect(wrapper.find('ToDoView').length).toBe(1);
  });

  test('ToDo calls 2 useEffects', () => {
    expect(useEffect).toBeCalledTimes(12);
  });  

  test('Count reflects number on list', () => {
    expect(wrapper.find('.todo-count').text()).toBe('3 items');
  });
  
  test('Count reflects number on list if list changes', async () => {
    jest.spyOn(async, 'getApi').mockResolvedValueOnce([1, 2]);
    useEffect = jest.spyOn(React, 'useEffect');
    useEffect.mockImplementationOnce(f => f());
    useEffect.mockImplementationOnce(f => f());
    wrapper = shallow(<ToDo />);
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });
    wrapper.update();
    expect(wrapper.find('.todo-count').text()).toBe('2 items');
  });
});
