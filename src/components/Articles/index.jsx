import React from 'react';
import ContentNav from 'components/ContentNav';
import displayArticles from 'utilities/display-articles';
import PropType from 'prop-types';
import Article from 'components/Article';

/**
 * Component holding the NavBar on top of articles, it maps all articles to their containers.
 *
 * @param {Object}   props Props passed to Articles Component.
 * @param {Object[]} articles Passed articles to be mapped to container.
 * @param {string}   selectedTag Selected tag for articles to be filtered.
 * @param {number}   currentPage Selected page for articles to be previewed.
 *
 * @return {JSX.Element} Container holding the Articles container in the home page.
 */
function Articles({ articles, selectedTag, currentPage }) {
  const { data } = displayArticles(articles, selectedTag, currentPage);

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
