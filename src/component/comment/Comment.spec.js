import React from 'react';
import { shallow } from 'enzyme';
import Comment from './Comment';

describe('Comment', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<Comment />));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
});