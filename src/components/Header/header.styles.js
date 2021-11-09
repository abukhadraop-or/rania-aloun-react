import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from 'styles/colors';
import breakpoints from 'styles/break-points';

export const Container = styled.header`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 3.5rem;
  justify-content: space-between;
  padding: 0 6.25rem 0;
  position: sticky;
  top: 0;
  background-color: white;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0 3.125rem 0;
  }
`;

export const Logo = styled.p`
  color: ${colors.boringGreen};
  cursor: pointer;
  font-family: 'titillium web', sans-serif;
  font-size: 1.375rem;
  font-weight: 700;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
