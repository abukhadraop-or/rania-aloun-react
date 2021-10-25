/* eslint-disable jest/no-commented-out-tests */
import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { act } from '@testing-library/react';
import ArticleHeader from '.';
import {
  LikeButtonContainer,
  LikeIcon,
  LikesCount,
  UnLikeIcon,
} from './article-header.styles';

jest.mock('services/update-likes', () => jest.fn());

describe('<ArticleHeader />', () => {
  it('renders correctly', () => {
    const wrapper = mount(
      <ArticleHeader
        id={1}
        liked={5}
        userName="Rania"
        publishDate="2021-05-08T21:00:00.000Z"
      />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  const wrapper = shallow(
    <ArticleHeader
      id={1}
      liked={5}
      userName="Rania"
      publishDate="2021-05-08T21:00:00.000Z"
    />
  );

  it('handles like button click', async () => {
    const likeBtn = wrapper.find(LikeButtonContainer);
    likeBtn.simulate('click');
    await act(() => Promise.resolve());
    wrapper.update();
    const counter = wrapper.find(LikesCount);
    const likeIcon = wrapper.find(LikeIcon);
    const unLikeIcon = wrapper.find(UnLikeIcon);

    expect(counter.text()).toEqual('6');
    expect(likeIcon.exists()).toBeTruthy();
    expect(unLikeIcon.exists()).toBeFalsy();
  });

  it('clicks like button again', async () => {
    const likeBtn = wrapper.find(LikeButtonContainer);
    likeBtn.simulate('click');
    await act(() => Promise.resolve());
    wrapper.update();

    const counter = wrapper.find(LikesCount);
    const likeIcon = wrapper.find(LikeIcon);
    const unLikeIcon = wrapper.find(UnLikeIcon);

    expect(counter.text()).toEqual('5');
    expect(likeIcon.exists()).toBeFalsy();
    expect(unLikeIcon.exists()).toBeTruthy();
  });
});
