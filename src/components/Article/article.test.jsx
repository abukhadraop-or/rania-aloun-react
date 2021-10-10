import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Article from '.';

Enzyme.configure({ adapter: new Adapter() });

describe('MyComponent', () => {
  const wrapper = shallow(
    <Article
      data={{
        articleTitle: 'title test',
        link: 'https://css-tricks.com/snippets/css/css-box-shadow/',
        tags: [{ id: 0, name: 'name test' }],
      }}
    />
  );

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
