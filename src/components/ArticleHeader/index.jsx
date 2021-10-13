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
 * @param {Object[]} article Passed article array holding it's publisher data with the likes of the article.
 * @param {func} onLike Sends the clicked article's id to the likes handler.
 *
 * @return {JSX.Element} Container holding the article header, publisher data and likes.
 */
function ArticleHeader({ id, liked, userName, publishDate }) {
  const [isLiked, setLike] = useState(false);
  const [count, setCount] = useState(liked);

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
