import React from 'react';

import ToolTip from './ToolTip';

describe('ToolTip.js', () => {
  let wrapper;
  let obj;

  beforeEach(() => {
    obj = { current: { offsetWidth: 100 }};

    jest.spyOn(React, 'useRef').mockImplementationOnce(() => (obj));

    wrapper = shallow(<ToolTip msg="foo">foo</ToolTip>);
  });

  test('ToolTip has a msg', () => {
    expect(wrapper.find('.tip').text()).toBe('foo');
  });

  test('ToolTip calculates margin', () => {
    obj = { current: { offsetWidth: 10 }};

    jest.spyOn(React, 'useRef').mockImplementationOnce(() => (obj));

    wrapper = shallow(<ToolTip msg="foo">foo</ToolTip>);

    expect(wrapper.find('.tip').get(0).props.style).toEqual({ marginLeft: '26px' });
  });
});
