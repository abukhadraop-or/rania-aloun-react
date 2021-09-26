import styled from "styled-components";

export const Logo = styled.p`
  color: #5cb85c;
  cursor: pointer;
  font-family: "titillium web", sans-serif;
  font-size: 22px;
  font-weight: 700;
`;

export const BannerTitle = styled.p`
  color: #fff;
  font-family: "titillium web", sans-serif;
  font-size: 3.5rem;
  margin: 0;
  text-shadow: 0 0 0.1rem rgba(0, 0, 0, 0.8);
  @media (max-width: 375px) {
    font-size: 3rem;
  }
`;
