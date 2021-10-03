import React from 'react';
import PropType from 'prop-types';
import ArticleHeader from 'components/ArticleHeader';
import {
  Container,
  ReadMoreP,
  ArticleTag,
  ArticleLink,
  ArticleTitle,
  ArticleFooter,
  ArticleTagsContainer,
} from './article';

/**
 * Component holding the article card.
 *
 * @param {object} props Passed props to Article function.
 * @param {object[]} data Passed article.
 * @return {JSX.Element} Article card holding all the article's data.
 */
function Article({ data }) {
  return (
    <Container>
      <ArticleHeader article={data} />
      <ArticleTitle>{data.articleTitle}</ArticleTitle>
      <ArticleLink>{data.link}</ArticleLink>
      <ArticleFooter>
        <ReadMoreP>Read more...</ReadMoreP>
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
    tags: PropType.arrayOf(
      PropType.shape({
        id: PropType.number,
        name: PropType.string,
        map: PropType.func,
      })
    ).isRequired,
  }).isRequired,
};

export default Article;
