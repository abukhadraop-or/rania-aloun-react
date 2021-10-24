import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import getAllTags from 'services/tags-service';
import { act } from '@testing-library/react';
import { Tag, TagButton } from './tags.styles';
import Tags from '.';

jest.mock('services/tags-service', () => jest.fn());

const mockedTags = {
  data: [
    {
      createdAt: '2021-09-27T03:27:53.000Z',
      id: 1,
      name: 'Article',
      updatedAt: '2021-09-27T03:27:53.000Z',
    },
  ],
};

describe('<Tags />', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Tags onTagSelect={jest.fn()} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('sets fetched data to tags', async () => {
    const promise = Promise.resolve();
    getAllTags.mockReturnValue(mockedTags);
    const wrapper = mount(<Tags onTagSelect={jest.fn()} />);

    await act(() => promise);
    wrapper.update();

    const { tags } = wrapper.find(Tag).at(1).text();
    expect(tags).toEqual(mockedTags.data.name);
  });

  it('calls onTagSelect on click on a tag', () => {
    const wrapper = mount(<Tags onTagSelect={jest.fn()} />);
    const tagButton = wrapper.find(TagButton);
    tagButton.simulate('click');
    expect(wrapper.props().onTagSelect).toHaveBeenCalled();
  });

  // it('calls onPageChange on click', () => {
  //   const wrapper = mount(
  //     <Pagination totalArticles={8} onPageChange={jest.fn()} />
  //   );
  //   const pageButton = wrapper.find(PageButton).at(1);
  //   pageButton.simulate('click');
  //   expect(wrapper.props().onPageChange).toHaveBeenCalled();
  // });
});
