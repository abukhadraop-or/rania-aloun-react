import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Article from '.';

describe('MyComponent', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(
      <Article
        data={{
          articleTitle: 'title test',
          link: 'link test',
          tags: [{ id: 0, name: 'name test' }],
          id: 1,
          liked: 5,
          userName: 'Rania',
          publishDate: '2021-05-08T21:00:00.000Z',
        }}
      />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
