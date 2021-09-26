import React from "react";
import { BannerDiv, BannerP } from "./banner";
import { BannerTitle } from "components/title";

/**
 * Component for showing the Banner of the home page.
 */
function index(props) {
  return (
    <BannerDiv>
      <BannerTitle>conduit</BannerTitle>
      <BannerP>A place to share your knowledge.</BannerP>
    </BannerDiv>
  );
}

export default index;
