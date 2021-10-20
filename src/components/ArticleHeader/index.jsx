import React, { useState } from 'react';
import PropTypes from 'prop-types';
import UserData from 'components/UserData';
import updateLikesService from 'services/update-likes';
import {
  LikeIcon,
  Container,
  UnLikeIcon,
  LikesCount,
  LikeButtonContainer,
} from './article-header.styles';

/**
 * Component holding the article card header.
 *
 * @param {Object} props Props passed to ArticleHeader Container.
 * @param {number} props.id Id of article.
 * @param {number} props.liked Likes count of the article.
 * @param {string} props.userName Name of article's publisher.
 * @param {string} props.publishDate Date of publishing the article.
 *
 * @return {JSX.Element} Container holding the article header, publisher data and likes.
 */
function ArticleHeader({ id, liked, userName, publishDate }) {
  const [isLiked, setLike] = useState(false);
  const [count, setCount] = useState(liked);

  /**
   * Function handles like click on the article, calls the updating service and changes the count on the article.
   */
  const handleLike = async () => {
    const trigger = isLiked ? -1 : 1;
    await updateLikesService(id, count + trigger);
    setCount(count + trigger);
    setLike(!isLiked);
  };

  return (
    <Container>
      <UserData userName={userName} publishDate={publishDate} />
      <LikeButtonContainer onClick={handleLike}>
        {isLiked ? <LikeIcon /> : <UnLikeIcon />}
        <LikesCount>{count}</LikesCount>
      </LikeButtonContainer>
    </Container>
  );
}

ArticleHeader.propTypes = {
  id: PropTypes.number.isRequired,
  liked: PropTypes.number.isRequired,
  userName: PropTypes.string.isRequired,
  publishDate: PropTypes.string.isRequired,
};
export default ArticleHeader;
