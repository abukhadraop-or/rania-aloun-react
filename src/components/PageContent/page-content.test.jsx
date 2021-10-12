import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { act } from '@testing-library/react';
import getArticles from 'services/get-articles';
import Articles from 'components/Articles';
import PageContent from '.';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('services/get-articles', () => jest.fn());
const mockedData = {
  data: [
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
  ],
};

describe('all', () => {
  it('lala', async () => {
    const promise = Promise.resolve();
    getArticles.mockReturnValue(mockedData);
    const wrapper = mount(<PageContent />);

    await act(() => promise);
    wrapper.update();

    const { articles } = wrapper.find(Articles).props();
    expect(articles).toEqual(mockedData.data);
  });
});
