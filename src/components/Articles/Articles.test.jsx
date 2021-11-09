import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Articles from '.';

describe('<Articles />', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(
      <Articles
        articles={[
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
        ]}
        selectedTag="Article"
      />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
