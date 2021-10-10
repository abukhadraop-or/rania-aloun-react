// import { Container } from 'components/Article/article';
// import React from 'react';
// import { render, unmountComponentAtNode } from 'react-dom';
// import { act } from 'react-dom/test-utils';
// import PageContent from '.';

// let container = null;
// beforeEach(() => {
//   // setup a DOM element as a render target
//   container = document.createElement('div');
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   // cleanup on exiting
//   unmountComponentAtNode(container);
//   container.remove();
//   container = null;
// });

// it('renders article data', async () => {
//   const fakeArticle = {
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
//   };
//   jest.spyOn(global, 'fetch').mockImplementation(() =>
//     Promise.resolve({
//       json: () => Promise.resolve(fakeArticle),
//     })
//   );

//   expect();
// });
