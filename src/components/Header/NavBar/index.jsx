import React, { useEffect, useState } from 'react';
import NavBar from './nav-bar';
import {
  Element,
  MenuElement,
  MenuButton,
  CloseButton,
  CloseElement,
  StyledNavLink,
} from './nav-element';

/**
 * Responsive component for the navigation bar in the header of the page.
 */
function Nav() {
  const [clicked, setClicked] = useState(true);

  /**
   * flips the clicked state in order to show the navbar or hide it
   */
  const handleClick = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    if (window.screen.width <= 375) {
      setClicked(false);
    }
  }, []);

  return (
    <>
      {/**
       * Menu icon only shown in mobile & if not clicked
       */}
      {!clicked && (
        <MenuButton onClick={handleClick}>
          <MenuElement />
        </MenuButton>
      )}

      {/**
       * Navbar shown in mobile only if menu icon is clicked
       */}
      {clicked && (
        <NavBar>
          <CloseButton onClick={handleClick}>
            <CloseElement />
          </CloseButton>
          <Element>
            <StyledNavLink to="/home"> Home </StyledNavLink>
          </Element>
          <Element>
            <StyledNavLink to="/signIn">Sign in</StyledNavLink>
          </Element>
          <Element>
            <StyledNavLink to="/signUp">Sign up</StyledNavLink>
          </Element>
        </NavBar>
      )}
    </>
  );
}

export default Nav;
