import styled from 'styled-components';

export const BannerDiv = styled.div`
  align-items: center;
  background-color: #5cb85c;
  box-shadow: inset 0 -0.438rem 0.563rem -0.438rem rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  height: 7rem;
  padding: 1.5rem 0;
`;

export const BannerP = styled.p`
  color: #fff;
  font-family: 'source sans pro', sans-serif;
  font-size: 1.5rem;
  margin: 0;
  text-align: center;
  @media (max-width: 375px) {
    font-size: 1.2rem;
  }
`;
