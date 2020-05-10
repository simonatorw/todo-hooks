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
});
