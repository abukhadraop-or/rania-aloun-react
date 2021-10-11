import styled from 'styled-components';
import { ReactComponent as heart } from 'assets/heart.svg';
import { ReactComponent as emptyHeart } from 'assets/empty-heart.svg';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ArticleDate = styled.p`
  color: #bbbbbb;
  font-size: 0.8rem;
  margin: 0;
`;

export const LikeButtonContainer = styled.button`
  background-color: transparent;
  border-radius: 0.125rem;
  border: 0.063rem solid #5cb85c;
  cursor: pointer;
  display: flex;
  height: fit-content;
  padding: 0.2rem 0.5rem;
`;

export const LikeIcon = styled(heart)`
  fill: #5cb85c;
  width: 0.8rem;
`;

export const UnLikeIcon = styled(emptyHeart)`
  width: 0.8rem;
  fill: #5cb85c;
`;

export const LikesCount = styled.p`
  color: #5cb85c;
  margin: 0 0 0 0.125rem;
`;
