import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import PageContent from '.';
import { act } from '@testing-library/react';

Enzyme.configure({ adapter: new Adapter() });

const mockedData = [
  {
    articleTitle: 'The way we look at things',
    createdAt: '2021-09-27T12:33:54.133Z',
    id: 1,
    liked: 32,
    link: 'https://css-tricks.com/snippets/css/css-box-shadow/',
    publishDate: '2021-05-08T21:00:00.000Z',
    updatedAt: '2021-10-12T10:11:00.709Z',
    userName: 'Rania Aloun',
    tags: [
      {
        TagArticle: {
          ArticleId: 1,
          TagId: 1,
          createdAt: '2021-09-27T03:27:53.000Z',
          updatedAt: '2021-09-27T03:27:53.000Z',
        },
        createdAt: '2021-09-27T03:27:53.000Z',
        id: 1,
        name: 'Article',
        updatedAt: '2021-10-12T10:11:00.709Z',
      },
    ],
  },
];

describe('all', () => {
  it('lala', async () => {
    await act(() => {
      const wrapper = mount(<PageContent />);
    });
  });
});
