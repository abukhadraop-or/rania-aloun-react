import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ContentNav from '.';

describe('<ContentNav />', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<ContentNav />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
