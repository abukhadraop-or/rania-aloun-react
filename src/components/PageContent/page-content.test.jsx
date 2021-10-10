import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import PageContent from '.';

Enzyme.configure({ adapter: new Adapter() });
describe('All test', () => {
  let axiosMock;
  beforeAll(() => {
    axiosMock = new MockAdapter(axios);
  });

  it('rania1', () => {
    const wrapper = mount(<PageContent />);
  });
});

// const articles = [
//   {
//     articleTitle: 'testing',
//     createdAt: '2021-09-27T12:33:54.133Z',
//     id: 10,
//     liked: 27,
//     link: 'https://css-tricks.com/snippets/css/css-box-shadow/',
//     publishDate: '2021-05-08T21:00:00.000Z',
//     tags: [
//       {
//         ArticleId: 1,
//         TagId: 1,
//         createdAt: '2021-09-27T03:27:53.000Z',
//         updatedAt: '2021-09-27T03:27:53.000Z',
//       },
//     ],
//     updatedAt: '2021-10-06T12:06:28.367Z',
//     userName: 'testing',
//   },
// ];
