import styled from 'styled-components';
import { ReactComponent as menu } from 'assets/menu.svg';
import { ReactComponent as close } from 'assets/close.svg';
import { NavLink } from 'react-router-dom';
import colors from 'styles/colors';
import breakpoints from 'styles/break-points';

export const Container = styled.ul`
  align-items: center;
  background-color: white;
  color: ${colors.coolGrey};
  display: flex;
  font-size: 0.9375rem;
  list-style-type: none;
  margin: 0;
  padding: 0;

  @media (max-width: ${breakpoints.mobile}) {
    /* box-shadow: 0 0 0.2rem rgba(0, 0, 0, 0.8); */
    flex-direction: column;
    display: ${({ display }) => (display ? 'static' : 'none')};
    position: absolute;
    top: 3.5rem;
    width: 100%;
    right: 0;
  }
`;

export const NavElement = styled.li`
  cursor: pointer;
  display: inline;
  margin: 0 0.625rem 0;

  &:hover {
    color: ${colors.shuttleGrey};
  }

  @media (max-width: ${breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
    padding: 0.5rem 1rem;
    border-bottom: 1px solid ${colors.ashGrey};
    margin: 0;
  }
`;

export const CloseIcon = styled(close)`
  display: none;
  margin: 0.4rem 0;

  @media (max-width: ${breakpoints.mobile}) {
    align-items: center;
    display: block;
  }
`;

export const MenuButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: none;

  @media (max-width: ${breakpoints.mobile}) {
    display: block;
  }
`;

export const MenuIcon = styled(menu)``;

export const StyledNavLink = styled(NavLink)`
  color: inherit;
  text-decoration: none;
`;
