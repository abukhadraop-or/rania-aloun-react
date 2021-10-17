// import React from 'react';
// import Enzyme, { shallow } from 'enzyme';
// import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
// import ArticleHeader from '.';
// import {
//   LikeIcon,
//   LikesCount,
//   UnLikeIcon,
//   LikeButtonContainer,
// } from './article-header.styles';

// Enzyme.configure({ adapter: new Adapter() });

// describe('<ArticleHeader />', () => {
//   const wrapper = shallow(
//     <ArticleHeader
//       article={{
//         id: 1,
//         liked: 5,
//         userName: 'Rania',
//         publishDate: '2021-05-08T21:00:00.000Z',
//       }}
//     />
//   );

//   it('renders correctly', () => {
//     expect(wrapper).toMatchSnapshot();
//   });

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
// });
