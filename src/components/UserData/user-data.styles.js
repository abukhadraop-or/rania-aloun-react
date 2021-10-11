import styled from 'styled-components';
import smile from 'assets/smile.jpg';
import colors from 'styles/colors';

export const Container = styled.div`
  display: flex;
  width: fit-content;
`;

export const UserImg = styled.div`
  background-image: url(${smile});
  background-size: contain;
  border-radius: 50%;
  height: 2rem;
  width: 2rem;
`;

export const InnerContainer = styled.div`
  margin: 0 0 0 0.5rem;
`;

export const UserName = styled.p`
  color: ${colors.boringGreen};
  cursor: pointer;
  font-family: 'source sans pro', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  &:hover {
    text-decoration: underline;
  }
`;

export const PublishDate = styled.p`
  color: ${colors.ashGrey};
  font-size: 0.8rem;
  margin: 0;
`;
