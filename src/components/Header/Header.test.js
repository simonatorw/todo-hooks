import React from 'react';

import Header from './Header';

describe('Header.js', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  test('Header has a title', () => {
    expect(wrapper.find('h1').length).toBe(1);
  });

  test('Header has a container', () => {
    expect(wrapper.find('.app-header').length).toBe(1);
  });
});
