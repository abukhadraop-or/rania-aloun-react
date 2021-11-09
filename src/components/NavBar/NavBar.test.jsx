import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import NavBar from '.';
import { CloseIcon, Container, MenuButton } from './nav-bar.styles';

describe('<NavBar />', () => {
  const wrapper = shallow(<NavBar />);
  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('shows nav menu on click', () => {
    const MenuBtn = wrapper.find(MenuButton);
    MenuBtn.simulate('click');

    expect(wrapper.find(Container).exists()).toBeTruthy();
  });

  it('hides menu icon on second click', () => {
    const MenuBtn = wrapper.find(MenuButton);
    MenuBtn.simulate('click');

    expect(wrapper.find(CloseIcon).exists()).toBeFalsy();
  });
});
