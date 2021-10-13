import styled from 'styled-components';
import colors from 'styles/colors';

export const Container = styled.div`
  border-top: 0.13rem solid ${colors.mercury};
  padding: 1.5rem 0;
`;

export const ArticleTitle = styled.p`
  color: black;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 1rem 0 0;
`;

export const ArticleLink = styled.p`
  color: ${colors.ashGrey};
  cursor: pointer;
  font-size: 0.8rem;
  margin: 0.2rem 0 0 0;
`;

export const ArticleFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0 0 0;
`;

export const ReadMoreText = styled.p`
  color: ${colors.ashGrey};
  cursor: pointer;
  font-size: 0.7rem;
  margin: 1rem 0;
`;

export const ArticleTagsContainer = styled.div`
  align-items: center;
  display: flex;
`;

export const ArticleTag = styled.p`
  border-radius: 0.8rem;
  border: 0.063rem solid ${colors.ashGrey};
  color: ${colors.ashGrey};
  cursor: pointer;
  font-size: 0.7rem;
  height: fit-content;
  margin: 0.125rem;
  padding: 0.2rem;
  width: fit-content;

  &:hover {
    border: 0.063rem solid ${colors.smokeyGrey};
  }
`;
