import React from 'react';
import { Container, BannerTitle, BannerP } from './banner';

/**
 * Component showing the Banner in the home page.
 *
 * @return {JSX.Element} Banner holding application title and a paragraph.
 */
function index() {
  return (
    <Container>
      <BannerTitle>conduit</BannerTitle>
      <BannerP>A place to share your knowledge.</BannerP>
    </Container>
  );
}

export default index;
