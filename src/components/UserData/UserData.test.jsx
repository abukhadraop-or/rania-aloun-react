import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import UserData from '.';

describe('<UserData />', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(
      <UserData userName="Rania" publishDate="18/10/2020" />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
