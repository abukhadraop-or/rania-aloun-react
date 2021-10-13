import styled from 'styled-components';
import colors from 'styles/colors';

export const Container = styled.div`
  margin: 0 1rem;
`;

export const TagsHeader = styled.p`
  font-family: 'source sans pro', sans-serif;
  font-size: 1.3rem;
  margin: 0 0 0.5rem 0;
  padding: 0 0.5rem;
  width: 100%;
`;

export const TagsContainer = styled.div`
  background-color: ${colors.aquaHaze};
  border-radius: 0.125rem;
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 0;
  padding: 0.3rem;
`;

export const TagButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
`;

export const Tag = styled.p`
  background-color: ${colors.osloGrey};
  border-radius: 0.8rem;
  color: #fff;
  cursor: pointer;
  font-size: 0.8rem;
  height: fit-content;
  margin: 0.125rem;
  padding: 0.2rem;
  width: fit-content;

  &:hover {
    background-color: ${colors.smokeyGrey};
  }
`;
