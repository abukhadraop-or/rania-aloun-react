import React, { useState } from 'react';
import {
  MenuIcon,
  Container,
  CloseIcon,
  NavElement,
  MenuButton,
  StyledNavLink,
} from './nav-bar.styles';

/**
 * Responsive component holding the navigation bar in the header of the page.
 *
 * @return {JSX.Element} Navigation bar holding home, sign in, and sign up routes.
 */
function NavBar() {
  const [isClicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!isClicked);
  };

  return (
    <>
      {isClicked && (
        <MenuButton onClick={handleClick}>
          <CloseIcon />
        </MenuButton>
      )}
      <Container isClicked={isClicked}>
        <NavElement>
          <StyledNavLink to="/home"> Home </StyledNavLink>
        </NavElement>
        <NavElement>
          <StyledNavLink to="/sign-in">Sign in</StyledNavLink>
        </NavElement>
        <NavElement>
          <StyledNavLink to="/sign-up">Sign up</StyledNavLink>
        </NavElement>
      </Container>
      {!isClicked && (
        <MenuButton onClick={handleClick}>
          <MenuIcon />
        </MenuButton>
      )}
    </>
  );
}

export default NavBar;
