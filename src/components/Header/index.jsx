import React from 'react';
import { Logo } from 'components/title';
import { Header, StyledLink } from './header';
import NavBar from './NavBar';

/*
 * header of the page
 */
function index() {
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
