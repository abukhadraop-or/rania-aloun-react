/* eslint-disable jest/no-commented-out-tests */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
// import updateLikes from 'services/update-likes';

import ArticleHeader from '.';
// import {
//   LikeIcon,
//   LikesCount,
//   UnLikeIcon,
//   LikeButtonContainer,
// } from './article-header.styles';
// import { act } from '@testing-library/react';

// Enzyme.configure({ adapter: new Adapter() });

// jest.mock('services/update-likes', () => jest.fn());

// const mockedData = {
//   data: 'likes updated',
// };

describe('<ArticleHeader />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <ArticleHeader
        article={{
          id: 1,
          liked: 5,
          userName: 'Rania',
          publishDate: '2021-05-08T21:00:00.000Z',
        }}
      />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  // it('handles like click', async () => {
  //   const promise = Promise.resolve();
  //   updateLikesservice.mockReturnValue(mockedData);

  //   await act(() => promise);
  //   wrapper.update();

  //   const {}
  // });

  //   it('renders liked icon when liked button is clicked', () => {
  //     const likeButton = wrapper.find(LikeButtonContainer);
  //     likeButton.simulate('click');
  //     const likeIcon = wrapper.find(LikeIcon);
  //     const unLikeIcon = wrapper.find(UnLikeIcon);
  //     const likesCount = wrapper.find(LikesCount);

  //     expect(likeIcon.exists()).toBeTruthy();
  //     expect(unLikeIcon.exists()).toBeFalsy();
  //     expect(likesCount.text()).toEqual('6');
  //   });

  //   it('renders unliked icon when liked button is toggled', () => {
  //     const LikeButton = wrapper.find(LikeButtonContainer);
  //     LikeButton.simulate('click');
  //     const likeIcon = wrapper.find(LikeIcon);
  //     const unLikeIcon = wrapper.find(UnLikeIcon);
  //     const likesCount = wrapper.find(LikesCount);

  //     expect(likeIcon.exists()).toBeFalsy();
  //     expect(unLikeIcon.exists()).toBeTruthy();
  //     expect(likesCount.text()).toEqual('5');
  //   });
});
