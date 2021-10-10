import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ArticleHeader from '.';
import { LikeButtonContainer, LikeIcon, UnLikeIcon } from './article-header';

Enzyme.configure({ adapter: new Adapter() });

describe('<ArticleHeader />', () => {
  const wrapper = shallow(
    <ArticleHeader
      article={{
        liked: 5,
      }}
    />
  );

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders liked icon when liked button is clicked', () => {
    const likeButton = wrapper.find(LikeButtonContainer);
    likeButton.simulate('click');
    const likeIcon = wrapper.find(LikeIcon);
    const unLikeIcon = wrapper.find(UnLikeIcon);

    expect(likeIcon.exists()).toBeTruthy();
    expect(unLikeIcon.exists()).toBeFalsy();
  });

  it('renders unliked icon when liked button is toggled', () => {
    const LikeButton = wrapper.find(LikeButtonContainer);
    LikeButton.simulate('click');
    const likeIcon = wrapper.find(LikeIcon);
    const unLikeIcon = wrapper.find(UnLikeIcon);

    expect(likeIcon.exists()).toBeFalsy();
    expect(unLikeIcon.exists()).toBeTruthy();
  });
});
