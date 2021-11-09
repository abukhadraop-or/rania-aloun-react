import React from 'react';
import ContentNav from 'components/ContentNav';
import PropType from 'prop-types';
import Article from 'components/Article';
import filterArticles from 'utilities/filter-articles';

/**
 * Component holding the NavBar on top of articles, it maps all articles to their containers.
 *
 * @param {Object}   props Props passed to Articles Component.
 * @param {Object[]} props.articles Passed articles to be mapped to container.
 * @param {string}   props.selectedTag Selected tag for articles to be filtered.
 *
 * @return {JSX.Element} Container holding the Articles container in the home page.
 */
function Articles({ articles, selectedTag }) {
  const filteredArticles = filterArticles(articles, selectedTag);
  const data = selectedTag === 'allArticles' ? articles : filteredArticles;

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
};

export default Articles;
