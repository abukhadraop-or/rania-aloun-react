import React from 'react';
import NavBar from 'components/NavBar';
import { Container, Logo, StyledLink } from './header.styles';

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
