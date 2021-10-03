import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  margin: 0 6rem;
  @media (max-width: 375px) {
    display: block;
    margin: 0 0.5rem;
  }
`;

export const InnerContainer = styled.div`
  margin: 3rem 0;
  width: 100%;
`;
