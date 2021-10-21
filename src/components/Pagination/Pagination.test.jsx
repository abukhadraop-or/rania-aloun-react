import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Pagination from '.';

describe('<Pagination />', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(
      <Pagination totalArticles={8} onPageChange={jest.fn()} />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
