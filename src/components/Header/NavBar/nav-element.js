import styled from 'styled-components';
import { ReactComponent as menu } from 'assets/menu.svg';
import { ReactComponent as close } from 'assets/close.svg';
import { NavLink } from 'react-router-dom';

export const Element = styled.li`
  display: inline;
  margin: 0 10px 0;
  cursor: pointer;
  &:hover {
    color: #616d72;
  }
  @media (max-width: 375px) {
    display: flex;
    flex-direction: column;
    margin: 0 0.5rem 1rem;
  }
`;

export const CloseButton = styled.button`
  display: none;
  border: none;
  cursor: pointer;
  background-color: transparent;
  margin: 0 0.5rem 1.5rem;
  @media (max-width: 375px) {
    display: block;
  }
`;

export const CloseElement = styled(close)`
  display: none;
  margin: 0.4rem 0;
  @media (max-width: 375px) {
    display: block;
    align-items: center;
  }
`;

export const MenuButton = styled.button`
  display: none;
  border: none;
  cursor: pointer;
  background-color: transparent;
  @media (max-width: 375px) {
    display: block;
  }
`;

export const MenuElement = styled(menu)``;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
`;
