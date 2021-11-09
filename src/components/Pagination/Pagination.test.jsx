import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Pagination from '.';
import { PageButton } from './pagination.styles';

const MockPaginate = jest.fn();
MockPaginate.mockReturnValue([0, 1, 2]);

describe('<Pagination />', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(
      <Pagination totalArticles={4} onPageChange={jest.fn()} />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('calls onPageChange on click', () => {
    const wrapper = mount(
      <Pagination totalArticles={8} onPageChange={jest.fn()} />
    );
    const pageButton = wrapper.find(PageButton).at(1);
    pageButton.simulate('click');
    expect(wrapper.props().onPageChange).toHaveBeenCalled();
  });
});
