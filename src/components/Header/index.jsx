import React from "react";
import { Header, StyledLink } from "./header";
import { Logo } from "components/title";
import NavBar from "./NavBar";

/*
 * header of the page
 */
function index(props) {
  return (
    <Header>
      <Logo>
        <StyledLink to="/">conduit</StyledLink>
      </Logo>
      <NavBar />
    </Header>
  );
}

export default index;
