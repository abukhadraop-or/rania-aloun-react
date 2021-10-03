import React, { useEffect, useState } from 'react';
import {
  MenuIcon,
  Container,
  CloseIcon,
  NavElement,
  MenuButton,
  CloseButton,
  StyledNavLink,
} from './nav-bar';

/**
 * Responsive component holding the navigation bar in the header of the page.
 *
 * @return {JSX.Element} Navigation bar holding home, sign in, and sign up routes.
 */
function NavBar() {
  const [isClicked, setClicked] = useState(true);

  /**
   * Flips the clicked state to show the navbar or hide it.
   */
  const handleClick = () => {
    setClicked(!isClicked);
  };

  useEffect(() => {
    if (window.screen.width <= 375) {
      setClicked(false);
    }
  }, []);

  return (
    <>
      {/**
       * Menu icon only shown in mobile & if not clicked.
       */}
      {!isClicked && (
        <MenuButton onClick={handleClick}>
          <MenuIcon />
        </MenuButton>
      )}

      {/**
       * Navbar shown in mobile only if menu icon is clicked.
       */}
      {isClicked && (
        <Container>
          <CloseButton onClick={handleClick}>
            <CloseIcon />
          </CloseButton>
          <NavElement>
            <StyledNavLink to="/home"> Home </StyledNavLink>
          </NavElement>
          <NavElement>
            <StyledNavLink to="/signIn">Sign in</StyledNavLink>
          </NavElement>
          <NavElement>
            <StyledNavLink to="/signUp">Sign up</StyledNavLink>
          </NavElement>
        </Container>
      )}
    </>
  );
}

export default NavBar;
