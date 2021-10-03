import styled from 'styled-components';

export const Container = styled.div`
  margin: 3rem 0;
  width: 100%;
`;

export const ArticlePreview = styled.div`
  border-top: 0.13rem solid #e6e5e3;
  padding: 1.5rem 0;
`;

export const ArticleTitle = styled.p`
  color: black;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 1rem 0 0;
`;

export const ArticleLink = styled.p`
  color: #bbbbbb;
  cursor: pointer;
  font-size: 0.8rem;
  margin: 0.2rem 0 0 0;
`;

export const LastLineContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0 0 0;
`;

export const ReadMoreP = styled.p`
  color: #bbbbbb;
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
  border: 0.063rem solid #bbbbbb;
  color: #bbbbbb;
  cursor: pointer;
  font-size: 0.7rem;
  height: fit-content;
  margin: 0.125rem;
  padding: 0.2rem;
  width: fit-content;
  &:hover {
    border: 0.063rem solid #6d6f70;
  }
`;
