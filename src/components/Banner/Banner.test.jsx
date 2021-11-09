import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Banner from '.';

describe('<Banner />', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Banner />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
