import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SignIn from 'pages/SignIn';

describe('<SignIn />', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<SignIn />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
