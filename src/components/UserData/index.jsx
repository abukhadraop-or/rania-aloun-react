import React from 'react';
import PropTypes from 'prop-types';
import smile from 'assets/smile.jpg';
import {
  UserImg,
  UserName,
  Container,
  PublishDate,
  InnerContainer,
} from './user-data.styles';

/**
 * Component showing the publisher data in the article card header.
 *
 * @param {Object} props Props passed to UserData Container.
 * @param {string} props.userName Name of article publisher.
 * @param {string} props.publishDate Date of publishing the article.
 *
 * @return {JSX.Element} Container holding the passed article's publisher data.
 */
function UserData({ userName, publishDate }) {
  return (
    <Container>
      <UserImg src={smile} />
      <InnerContainer>
        <UserName>{userName}</UserName>
        <PublishDate>{publishDate}</PublishDate>
      </InnerContainer>
    </Container>
  );
}

UserData.propTypes = {
  userName: PropTypes.string.isRequired,
  publishDate: PropTypes.string.isRequired,
};

export default UserData;
