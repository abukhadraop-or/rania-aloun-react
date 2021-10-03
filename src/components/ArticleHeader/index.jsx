import React, { useState } from 'react';
import PropTypes from 'prop-types';
import UserData from 'components/UserData';
import axios from 'axios';
import {
  Container,
  LikeButtonContainer,
  LikeIcon,
  UnLikeIcon,
  LikesCount,
} from './article-header';

/**
 * Component holding the article card header.
 *
 * @param {Object} props Props passed to ArticleHeader Container.
 * @param {Object[]} article Passed article array holding it's publisher data with the likes of the article.
 * @param {func} onLike Sends the clicked article's id to the likes handler.
 * @return {JSX.Element} Container holding the article header, publisher data and likes.
 */
function ArticleHeader({ article }) {
  const [isLiked, setLike] = useState(false);
  const [count, setCount] = useState(article.liked);

  const updateLikes = async (updatedCount) => {
    await axios.put(`http://localhost:3600/updateArticleLikes/${article.id}`, {
      passed: updatedCount,
    });
  };

  const handleLike = async () => {
    setLike(!isLiked);
    if (!isLiked) {
      setCount(count + 1);
      updateLikes(count + 1);
    } else {
      setCount(count - 1);
      updateLikes(count - 1);
    }
  };
  return (
    <Container>
      <UserData article={article} />
      <LikeButtonContainer onClick={() => handleLike()}>
        {isLiked && <LikeIcon />}
        {!isLiked && <UnLikeIcon />}
        <LikesCount>{count}</LikesCount>
      </LikeButtonContainer>
    </Container>
  );
}

ArticleHeader.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.number,
    liked: PropTypes.number,
  }).isRequired,
};
export default ArticleHeader;
