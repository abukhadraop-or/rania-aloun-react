import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  UserImg,
  InnerContainer,
  UserName,
  PublishDate,
} from './user-data.styles';

/**
 * Component showing the publisher data in the article card header.
 *
 * @param {Object} props Props passed to UserData Container.
 * @param {Object[]} article Passed article array holding it's publisher data.
 * @return {JSX.Element} Container holding the passed article's publisher data.
 */
function UserData({ article }) {
  return (
    <Container>
      <UserImg />
      <InnerContainer>
        <UserName>{article.userName}</UserName>
        <PublishDate>{article.publishDate}</PublishDate>
      </InnerContainer>
    </Container>
  );
}

UserData.propTypes = {
  article: PropTypes.shape({
    userName: PropTypes.string,
    publishDate: PropTypes.string,
  }).isRequired,
};

export default UserData;
