import styled from 'styled-components';
import colors from 'styles/colors';

export const NavBar = styled.ul`
  background-color: white;
  color: ${colors.coolGrey};
  font-size: 0.938rem;
  list-style-type: none;
  margin: 0 0 0.53rem;
  padding: 0;
`;

export const NavElement = styled.li`
  border-bottom: 0.13rem solid ${colors.boringGreen};
  color: ${colors.boringGreen};
  cursor: pointer;
  display: inline;
  margin: 0 0.625rem 0;
  margin: 0;
  padding: 0.5rem 1rem;
`;
