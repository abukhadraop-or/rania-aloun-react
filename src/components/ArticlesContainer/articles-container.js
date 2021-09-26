import styled from 'styled-components';
import { ReactComponent as heart } from 'assets/heart.svg';
import smile from 'assets/smile.jpg';

export const Container = styled.div`
  margin: 3rem 0;
  width: 100%;
`;

export const ArticlePreview = styled.div`
  border-top: 0.13rem solid #e6e5e3;
  padding: 1.5rem 0;
`;

export const FirstLineContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const UserContainer = styled.div`
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

export const UserData = styled.div`
  margin: 0 0 0 0.5rem;
`;

export const UserName = styled.p`
  color: #5cb85c;
  cursor: pointer;
  font-family: 'source sans pro', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  &:hover {
    text-decoration: underline;
  }
`;

export const ArticleDate = styled.p`
  color: #bbbbbb;
  font-size: 0.8rem;
  margin: 0;
`;

export const LikedContainer = styled.button`
  background-color: transparent;
  border-radius: 0.125rem;
  border: 0.063rem solid #5cb85c;
  cursor: pointer;
  display: flex;
  height: fit-content;
  padding: 0.2rem 0.5rem;
`;

export const LikedIcon = styled(heart)`
  fill: #5cb85c;
  width: 0.8rem;
`;

export const LikedCount = styled.p`
  color: #5cb85c;
  margin: 0 0 0 0.125rem;
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
