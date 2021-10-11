import React, { useEffect, useState } from 'react';
import {
  MenuIcon,
  Container,
  CloseIcon,
  NavElement,
  MenuButton,
  CloseButton,
  StyledNavLink,
} from './nav-bar.styles';

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
      {!isClicked && (
        <MenuButton onClick={handleClick}>
          <MenuIcon />
        </MenuButton>
      )}

      {isClicked && (
        <Container>
          <CloseButton onClick={handleClick}>
            <CloseIcon />
          </CloseButton>
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
      )}
    </>
  );
}

export default NavBar;
