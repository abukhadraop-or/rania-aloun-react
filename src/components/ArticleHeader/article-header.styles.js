import styled from 'styled-components';
import { ReactComponent as heart } from 'assets/heart.svg';
import { ReactComponent as emptyHeart } from 'assets/empty-heart.svg';
import colors from 'styles/colors';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ArticleDate = styled.p`
  color: ${colors.smokeyGrey};
  font-size: 0.8rem;
  margin: 0;
`;

export const LikeButtonContainer = styled.button`
  background-color: transparent;
  border-radius: 0.125rem;
  border: 0.063rem solid ${colors.boringGreen};
  cursor: pointer;
  display: flex;
  height: fit-content;
  padding: 0.2rem 0.5rem;
`;

export const LikeIcon = styled(heart)`
  fill: ${colors.boringGreen};
  width: 0.8rem;
`;

export const UnLikeIcon = styled(emptyHeart)`
  width: 0.8rem;
  fill: ${colors.boringGreen};
`;

export const LikesCount = styled.p`
  color: ${colors.boringGreen};
  margin: 0 0 0 0.125rem;
`;
