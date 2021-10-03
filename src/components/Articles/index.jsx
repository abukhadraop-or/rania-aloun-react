import React from 'react';
import ContentNav from 'components/ContentNav';
import DisplayArticles from 'utilities/displayArticles';
import PropType from 'prop-types';
import Article from 'components/Article';

function Articles({ articles, selectedTag, currentPage }) {
  const { data } = DisplayArticles(articles, selectedTag, currentPage);
  return (
    <>
      <ContentNav />
      {data.map((article) => (
        <Article data={article} key={article.id} />
      ))}
    </>
  );
}

Articles.propTypes = {
  articles: PropType.arrayOf(
    PropType.shape({
      id: PropType.number,
    })
  ).isRequired,
  selectedTag: PropType.string.isRequired,
  currentPage: PropType.number.isRequired,
};

export default Articles;
