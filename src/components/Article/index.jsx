import React from 'react';
import PropType from 'prop-types';
import ArticleHeader from 'components/ArticleHeader';
import {
  Container,
  ArticleTag,
  ArticleLink,
  ReadMoreText,
  ArticleTitle,
  ArticleFooter,
  ArticleTagsContainer,
} from './article.styles';

/**
 * Component holding the article card.
 *
 * @param {Object} props Passed props to Article function.
 * @param {Object[]} data Passed article.
 *
 * @return {JSX.Element} Article card holding all the article's data.
 */
function Article({ data }) {
  return (
    <Container>
      <ArticleHeader
        id={data.id}
        liked={data.liked}
        userName={data.userName}
        publishDate={data.publishDate}
      />
      <ArticleTitle>{data.articleTitle}</ArticleTitle>
      <ArticleLink>{data.link}</ArticleLink>
      <ArticleFooter>
        <ReadMoreText>Read more...</ReadMoreText>
        <ArticleTagsContainer>
          {data.tags.map((tag) => (
            <ArticleTag key={tag.id}>{tag.name}</ArticleTag>
          ))}
        </ArticleTagsContainer>
      </ArticleFooter>
    </Container>
  );
}

Article.propTypes = {
  data: PropType.shape({
    articleTitle: PropType.string,
    link: PropType.string,
    id: PropType.number,
    liked: PropType.number,
    userName: PropType.string,
    publishDate: PropType.string,
    tags: PropType.arrayOf(
      PropType.shape({
        id: PropType.number,
        name: PropType.string,
      })
    ).isRequired,
  }).isRequired,
};

export default Article;
