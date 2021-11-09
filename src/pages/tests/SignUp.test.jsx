import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SignUp from 'pages/SignUp';

describe('<SignUp />', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<SignUp />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
