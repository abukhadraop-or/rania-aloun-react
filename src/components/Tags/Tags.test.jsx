import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
// import getTags from 'services/tags-service';
// import { act } from '@testing-library/react';
import Tags from '.';
// import { Tag } from './tags.styles';

// jest.mock('services/get-tags', () => jest.fn());

// const mockedTags = {
//   data: [
//     {
//       createdAt: '2021-09-27T03:27:53.000Z',
//       id: 1,
//       name: 'Article',
//       updatedAt: '2021-09-27T03:27:53.000Z',
//     },
//   ],
// };

describe('<Tags />', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Tags onTagSelect={jest.fn()} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  //   it('sets fetched data to tags', async () => {
  //     const promise = Promise.resolve();
  //     getTags.mockReturnValue(mockedTags);
  //     const wrapper = mount(<Tags onTagSelect={jest.fn()} />);
  //     await act(() => promise);
  //     wrapper.update();
  //     const { tags } = wrapper.find(Tag).text();
  //     expect(tags).toEqual(mockedTags.data.name);
  //   });
});
