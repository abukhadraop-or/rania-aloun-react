import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { act } from '@testing-library/react';
import getArticles from 'services/articles-service';
import Articles from 'components/Articles';
// import Pagination from 'components/Pagination';
import { toast } from 'react-toastify';

import PageContent from '.';

jest.mock('services/articles-service', () => jest.fn());

const toastErrorSpy = jest.spyOn(toast, 'error');

const mockedData = {
  data: {
    articles: [
      {
        articleTitle: 'The way we look at things',
        createdAt: '2021-09-27T12:33:54.133Z',
        id: 1,
        liked: 32,
        link: 'https://css-tricks.com/snippets/css/css-box-shadow/',
        publishDate: '2021-05-08T21:00:00.000Z',
        updatedAt: '2021-10-12T10:11:00.709Z',
        userName: 'Rania',
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
    currentPage: 0,
    totalItems: 4,
    totalPages: 2,
  },
};

describe('<PageContent />', () => {
  it('matches screenshot', () => {
    const wrapper = shallow(<PageContent />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('sets fetched data to articles', async () => {
    const promise = Promise.resolve();
    getArticles.mockReturnValue(mockedData);
    const wrapper = mount(<PageContent />);

    await act(() => promise);
    wrapper.update();

    const { articles } = wrapper.find(Articles).props();
    expect(articles).toEqual(mockedData.data.articles);
  });

  // it('it changes currentPage state on pageHandler called', () => {
  //   const wrapper = shallow(<PageContent />);

  // });

  // it('calls handlePageChange on click on a page number', () => {
  // const wrapper = shallow(<PageContent />);
  // let { onPageChange } = wrapper.find(Pagination).props();
  // let page = 0;
  // const mockedPageHandler = (newval) => {
  //   jest.fn((page = newval));
  // };
  // onPageChange = mockedPageHandler;
  // onPageChange(1);
  // console.log('page new = ', page);
  // onPageChange.simulate('change', )

  // const setState = jest.fn();
  // const useStateSpy = jest.spyOn(React, 'useState');
  // useStateSpy.mockImplementation((init) => [init, setState]);
  // expect(setState).toHaveBeenCalled();
  // });
});
