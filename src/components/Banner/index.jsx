import React from 'react';
import { BannerTitle } from 'components/title';
import { BannerDiv, BannerP } from './banner';

/**
 * Component for showing the Banner of the home page.
 */
function index() {
  return (
    <BannerDiv>
      <BannerTitle>conduit</BannerTitle>
      <BannerP>A place to share your knowledge.</BannerP>
    </BannerDiv>
  );
}

export default index;
