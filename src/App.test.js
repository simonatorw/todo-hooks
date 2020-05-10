import React from 'react';

import App from './App';

describe('App.js', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  test('App has a container', () => {
    expect(wrapper.find('.app').length).toBe(1);
  });

  test('App has a header', () => {
    expect(wrapper.find('Header').length).toBe(1);
  });

  test('App has a todo comp', () => {
    expect(wrapper.find('ToDo').length).toBe(1);
  });
});
