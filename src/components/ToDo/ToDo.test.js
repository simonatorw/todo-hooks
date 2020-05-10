import React from 'react';

import ToDo from './ToDo';

describe('ToDo.js', () => {
  let wrapper;
  let useEffect;
  let useCb;

  beforeEach(() => {
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
    expect(useEffect).toBeCalledTimes(8);
  });  
});
