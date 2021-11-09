import React from 'react';
import { Container, BannerTitle, BannerText } from './banner.styles';

/**
 * Component showing the Banner in the home page.
 *
 * @return {JSX.Element} Banner holding application title and a paragraph.
 */
function Banner() {
  return (
    <Container>
      <BannerTitle>conduit</BannerTitle>
      <BannerText>A place to share your knowledge.</BannerText>
    </Container>
  );
}

export default Banner;
