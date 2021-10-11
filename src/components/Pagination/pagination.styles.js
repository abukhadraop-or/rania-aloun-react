import styled from 'styled-components';
import colors from 'styles/colors';

export const PagesContainer = styled.nav`
  margin: 2rem 0 0;
`;

export const PagesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const PageNumber = styled.li`
  border-radius: 0;
  border: 0.063rem solid ${colors.ashGrey};
  color: ${colors.boringGreen};
  cursor: pointer;
  margin: 0 -0.063rem 0 0;
  width: fit-content;
  &:active {
    color: white;
    background-color: ${colors.boringGreen};
    border: none;
  }
`;

export const PageButton = styled.button`
  background-color: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.6rem;
`;
