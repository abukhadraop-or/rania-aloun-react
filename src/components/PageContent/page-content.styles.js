import styled from 'styled-components';
import breakpoints from 'styles/break-points';

export const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  margin: 0 6rem;

  @media (max-width: ${breakpoints.tablet}) {
    margin: 0 0.5rem;
  }
  @media (max-width: ${breakpoints.tabletWide}) {
    display: block;
    margin: 0 0.5rem;
  }
`;

export const InnerContainer = styled.div`
  margin: 3rem 0;
  width: 100%;
`;
