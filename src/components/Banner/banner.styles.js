import styled from 'styled-components';
import colors from 'styles/colors';
import breakpoints from 'styles/break-points';

export const Container = styled.div`
  align-items: center;
  background-color: ${colors.boringGreen};
  box-shadow: inset 0 -0.438rem 0.563rem -0.438rem rgba(0, 0, 0, 0.4),
    inset 0 7px 9px -7px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  height: 10.5625rem;
  padding: 1.5rem 0;
`;

export const BannerTitle = styled.p`
  color: white;
  font-family: 'titillium web', sans-serif;
  font-size: 3.5rem;
  margin: 0;
  text-shadow: 0 0 0.1rem rgba(0, 0, 0, 0.8);

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 3rem;
  }
`;

export const BannerText = styled.p`
  color: white;
  font-family: 'source sans pro', sans-serif;
  font-size: 1.5rem;
  margin: 0;
  text-align: center;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.2rem;
  }
`;
