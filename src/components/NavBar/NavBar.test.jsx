import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import NavBar from '.';

describe('<NavBar />', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<NavBar />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
