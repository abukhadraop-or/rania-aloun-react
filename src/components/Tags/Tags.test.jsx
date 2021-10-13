import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import getTags from 'services/tags-service';
import { act } from '@testing-library/react';
import Tags from '.';
import { Tag } from './tags.styles';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('services/get-tags', () => jest.fn());

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
  it('sets fetched data to tags', async () => {
    const promise = Promise.resolve();
    getTags.mockReturnValue(mockedTags);
    const wrapper = mount(<Tags onTagSelect={jest.fn()} />);

    await act(() => promise);
    wrapper.update();

    const { tags } = wrapper.find(Tag).text();
    expect(tags).toEqual(mockedTags.data.name);
  });
});
