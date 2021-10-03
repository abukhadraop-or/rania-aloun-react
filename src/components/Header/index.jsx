import React from 'react';
import { Container, Logo, StyledLink } from './header';
import NavBar from '../NavBar';

/**
 * Component holding the header of the application.
 *
 * @return {JSX.Element} Header holding the logo word on the left and the navigation bar on the right.
 */
function Header() {
  return (
    <Container>
      <Logo>
        <StyledLink to="/">conduit</StyledLink>
      </Logo>
      <NavBar />
    </Container>
  );
}

export default Header;
